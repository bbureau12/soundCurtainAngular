import { Component, Input } from '@angular/core';
import { Setting } from '../common/models/setting';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { updateSettings } from './store/settings.actions';

@Component({
  selector: 'settings-form',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  title = 'settings-form-app';
  @Input() settings!: Setting[] | null;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {

   }

   ngOnInit(): void {
    // Create form controls for each setting
    const formControls: { [key: string]: FormControl } = {};
    console.log('in oninit settings:', this.settings)
    if (this.settings != null)
    {
      this.settings.forEach(setting => {
        // Use setting Key as control name and setting Value as initial value
        formControls[setting.Key] = new FormControl(setting.Value);
        console.log(formControls[setting.Key]);
      });
    }
    // Create the form group
    this.form = this.fb.group(formControls);
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedSettings = Object.keys(this.form.value).map(key => ({
        Key: key,
        Value: this.form.value[key],
        IsPublic: 1
      }));

      console.log(updatedSettings);
      this.store.dispatch(updateSettings({settings:updatedSettings}))
    }
  }
}
