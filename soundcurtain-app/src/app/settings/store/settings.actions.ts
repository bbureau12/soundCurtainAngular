import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from "@ngrx/store";
import { Setting } from 'src/app/common/models/setting';

export const getSettings = createAction('[Setting Component] Get Settings');
export const getSettingsOnSuccess = createAction('[Setting Component] Get Settings Success', props<{ settings: Setting[] }>());
export const getSettingsOnFailure = createAction('[Setting Component] Get Settings Failure', props<{ error: HttpErrorResponse }>());

export const updateSettings = createAction('[Setting Component] Update Settings', props<{ settings: Setting[] }>());
export const updateSettingsOnSuccess = createAction('[Setting Component] Update Settings Success', props<{ settings: Setting[] }>());
export const updateSettingsOnFailure = createAction('[Setting Component] Update Settings Failure', props<{ error: HttpErrorResponse }>());