import { Component, Input } from '@angular/core';
import { Setting } from '../common/models/setting';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-form',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  title = 'settings-form-app';
  @Input() settings: Setting[] = [];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {

   }

   ngOnInit(): void {
    // Create form controls for each setting
    const formControls: { [key: string]: FormControl } = {};;
    this.settings.forEach(setting => {
      // Use setting Key as control name and setting Value as initial value
      formControls[setting.Key?.valueOf() || ''] = new FormControl(setting.Value);
    });

    // Create the form group
    this.form = this.fb.group(formControls);
  }

  // Method to submit the form
  onSubmit(): void {
    if (this.form.valid) {
      // Get the updated values from the form
      const updatedSettings = Object.keys(this.form.value).map(key => ({
        Key: key,
        Value: this.form.value[key]
      }));

      // Do something with updatedSettings (e.g., send them to a service for saving)
      console.log(updatedSettings);
    }
  }
}
