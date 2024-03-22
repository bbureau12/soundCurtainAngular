exports.onExecutePostLogin = async (event, api) => {
    const connection = (event.connection.name || '').toLowerCase();
    const retry = require('retry');

    // This rule is only for set-saml
    if (connection !== 'set-saml') {
        console.log('not set')
        return;
    }

    const performOperation = async () => {
        const user = event.user
        let permissions = [];
        const portalDealerRoles = [
            'Dealer Principal',
            'General Manager',
            'Internet Manager',
            'New Vehicle Sales Manager',
            'Service Manager',
            'Corporate / Back Office'
        ];
        if (isMappedRole(user.role, portalDealerRoles)) {
            permissions.push(...await getPermissionsForRole('Portal Dealer SET1 and Lexus'));
        }
        const managerRoles = [
            'General Manager',
            'Service Manager',
        ];
        if (isMappedRole(user.role, managerRoles)) {
            permissions.push(...await getPermissionsForRole('Portal Service SET1'));
            permissions.push(...await getPermissionsForRole('Portal Dealer SET1 Manager'));
        }

        permissions = [...new Set(permissions)];
        api.idToken.setCustomClaim(

            'https://outsell.com/permission',
            permissions
        );
        api.accessToken.setCustomClaim(
            'https://outsell.com/permission',
            permissions
        );

        event.user.permissions = permissions.toString(); // Format for EPI's SAML requirements
        api.user.setAppMetadata('permissions', permissions);
        console.log('exiting with permissions', permissions);
    }

    async function getPermissionsForRole(role) {
        console.log('getting permission for role:', role)
        const url = `https://test-api.outsell.com/identity/Dev1/v1/roles/${encodeURIComponent(role)}`;
        //const url = 'https://httpstat.us/500'
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': event.secrets.Auth0DomainIdentityAPIKey
                },
                timeout: 30000 // Corrected from setTimeout to timeout
            });
            console.log('got result', response)
            if (response.status >= 300) {
                const body = await getResponseBodyOrEmptyString(response.body)
                const bodyMsg = body == '' ? body : JSON.stringify(body.message);
                const bodyErr = body == '' ? '' : JSON.stringify(body.error);
                const errorMessage = bodyMsg && bodyErr ? `Message: ${bodyMsg}. Error: ${bodyErr}.` : bodyMsg || bodyErr || 'None';
                const responseStatus = `${response.status} - ${response.statusText}`;
                const message = `${responseStatus}. Additional info: ${errorMessage}`;

                await logToLoggly({
                    error: message,
                    severity: response.status >= 500 ? 'Error' : 'Warning',
                    apiResponse: response
                });

                throw new Error(message);
            }

            const role = await response.json();
            return role.permissions;
        } catch (error) {
            console.log('in error', error)
            throw error; // Re-throw the error to handle it in the caller function
        }
    }

    async function getResponseBodyOrEmptyString(response) {
        try {
            return await response.json();
        } catch (error) {
            return '';
        }
    }

    function isMappedRole(roles, validRoles) {
        roles = roles || [];
        roles = Array.isArray(roles) ? roles : [roles];
        console.log('testing roles in', validRoles)

        return roles.some(roleName => validRoles.includes(roleName));
    }

    const scriptName = 'Rule: Add permissions for SET user';
    // note: for call to work within await structure logToLoggly has to be declared above faultTolerant
    const logToLoggly = async ({ message = scriptName, error = {}, severity = 'Information', apiResponse = {} } = {}) => {
        const url = `https://logs-01.loggly.com/inputs/${event.secrets.LogglyKey}/tag/auth0,${event.secrets.Auth0Domain},${event.secrets.Environment}`;
        console.log('loggly URL:', url);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    message: `${message}, Error: ${error}, User: ${event.user.username}, Response: ${JSON.stringify(apiResponse)}`,
                    severity: severity
                },
                setTimeout: 30000
            });
            console.log('got loggly response:', response);
        } catch (err) {
            console.log(`${message} attempted to call Loggly and generated an error: ${JSON.stringify(err)}`);
        }

    }

    const faultTolerant = async (cb) => {
        const operation = retry.operation({
            retries: 3
        });
        console.log('in fault tolerant');
        /** @type {Promise<void>} */
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    await performOperation();
                    resolve('retry');
                } catch (err) {
                    if (operation.retry(err)) {
                        console.log(`Retry attempt ${currentAttempt}`);
                        return;
                    }
                    reject(operation.mainError() || err);
                }
            });
        });
    }

    await faultTolerant((err) => {
        if (err) {
            return
        }
    });
};


/**
* Handler that will be invoked when this action is resuming after an external redirect. If your
* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
// exports.onContinuePostLogin = async (event, api) => {
// };
