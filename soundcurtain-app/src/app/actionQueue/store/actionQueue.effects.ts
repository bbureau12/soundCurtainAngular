import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { queueAction, queueActionOnFailure, queueActionOnSuccess, } from './actionQueue.actions';
import { of } from 'rxjs';
import { ActionService } from 'src/app/services/actionService';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private actionService: ActionService
  ) {
  }

  update$ = createEffect(() =>
  this.actions$.pipe(
    ofType(queueAction),
    switchMap((action) =>
      this.actionService.queueAction(action.actionId).pipe(
        map((settings) =>{ 
            console.log('in effect')
            console.log(settings)
            return queueActionOnSuccess()
          }),
        catchError((error) => { 
            console.log(error)
            return of(queueActionOnFailure({ error }))})
  )
  )
  )
  );


}