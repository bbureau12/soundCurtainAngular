import { Component, Input } from '@angular/core';
import { Setting } from '../common/models/setting';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { getSettings } from './store/settings.actions';
import { selectSettings } from './store/settings.selector';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'settings',
  templateUrl: './settings.container.html'
})
export class SettingsContainer {
  title = 'settings-app';
  public publicSettings$ = this.store.select(selectSettings);
  public hasSettings$: Observable<boolean> = this.publicSettings$.pipe(
    map(settings => !!settings && settings.length > 0)
  );
  constructor(private store: Store<AppState>) {
    // this.store.dispatch(getRandomSound(
  };

  ngOnInit(): void {
    this.store.dispatch(getSettings());
  }
}
