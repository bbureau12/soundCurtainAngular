import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';


import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { state } from '@angular/animations';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.interfaces';
import { MediaService } from 'src/app/services/mediaService';
import { environment } from 'src/app/environments/environment';
import { getRandomImage, getRandomImageOnFailure, getRandomImageOnSuccess } from './flavor-img.actions';

@Injectable()
export class ImageEffects {
  constructor(
    private actions$: Actions,
    private myService: MediaService
  ) {
  }

  randomSoundEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getRandomImage),
    switchMap(() => {
      console.log ('in effect')
      return this.myService.getRandomImage().pipe(
        map((image) =>{ 
            console.log(image)
            return getRandomImageOnSuccess({ image })}),
        catchError((error) => { 
            console.log(error)
            return of(getRandomImageOnFailure({ error }))})
      )}
    )
  )
);

}