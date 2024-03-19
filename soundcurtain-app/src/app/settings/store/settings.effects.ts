import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { SettingService } from 'src/app/services/settingsService';
import { getSettings, getSettingsOnFailure, getSettingsOnSuccess, updateSettings } from './settings.actions';
import { of } from 'rxjs';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private settingsService: SettingService
  ) {
  }

  settings$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getSettings),
    switchMap(() =>
      this.settingsService.getSettings().pipe(
        map((settings) =>{ 
            console.log('in effect')
            console.log(settings)
            return getSettingsOnSuccess({ settings })}),
        catchError((error) => { 
            console.log(error)
            return of(getSettingsOnFailure({ error }))})
      )
    )
  )
);

update$ = createEffect(() =>
this.actions$.pipe(
  ofType(updateSettings),
  switchMap((action) =>
    this.settingsService.updateSettings(action.settings).pipe(
      map((settings) =>{ 
          console.log('in effect')
          console.log(settings)
          return getSettingsOnSuccess({ settings })}),
      catchError((error) => { 
          console.log(error)
          return of(getSettingsOnFailure({ error }))})
    )
  )
)
);

}