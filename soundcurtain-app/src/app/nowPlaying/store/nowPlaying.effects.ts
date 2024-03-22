import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NowPlayingService } from 'src/app/services/nowPlayingService';
import { getNowPlaying, getNowPlayingOnFailure, getNowPlayingOnSuccess } from './nowPlaying.actions';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private nowPlayingService: NowPlayingService
  ) {
  }

  update$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getNowPlaying),
    switchMap((action) =>
      this.nowPlayingService.getNowPlaying().pipe(
        map((payload) =>{ 
            console.log('in effect')
            console.log(payload)
            return getNowPlayingOnSuccess({ nowPlaying:payload})
          }),
        catchError((error) => { 
            console.log(error)
            return of(getNowPlayingOnFailure({ error }))})
  )
  )
  )
  );


}