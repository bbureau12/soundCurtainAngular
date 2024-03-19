import { Component, Input } from '@angular/core';
import { Setting } from '../common/models/setting';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { getSettings } from './store/settings.actions';

@Component({
  selector: 'settings',
  templateUrl: './settings.container.html'
})
export class SettingsContainer {
  title = 'settings-app';
  @Input() settings: Setting[] | undefined;
  constructor(private store: Store<AppState>) {
    // this.store.dispatch(getRandomSound(
  };

  ngOnInit(): void {
    this.store.dispatch(getSettings());
  }
}
