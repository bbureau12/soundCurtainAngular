import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { queueAction, queueActionOnFailure, queueActionOnSuccess, } from './actionQueue.actions';
import { of } from 'rxjs';
import { ActionService } from 'src/app/services/actionService';

@Injectable()
export class ActionQueueEffects {
  constructor(
    private actions$: Actions,
    private actionService: ActionService
  ) {
  }

  action$ = createEffect(() =>
  this.actions$.pipe(
    ofType(queueAction),
    switchMap((action) =>
      this.actionService.queueAction(action.actionId).pipe(
        map(() =>{ 
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