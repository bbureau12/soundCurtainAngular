import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';


import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { state } from '@angular/animations';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.interfaces';
import { MediaService } from 'src/app/services/mediaService';
import { environment } from 'src/app/environments/environment';
import { SettingService } from 'src/app/services/settingsService';
import { getSettings, getSettingsOnFailure, getSettingsOnSuccess } from './settings.actions';

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

}