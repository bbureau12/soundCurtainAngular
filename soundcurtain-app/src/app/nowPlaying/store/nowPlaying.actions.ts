import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from "@ngrx/store";
import { NowPlayingAudio } from 'src/app/common/models/nowPlayingAudio';

export const getNowPlaying = createAction('[NowPlaying Component] Get Action');
export const getNowPlayingOnSuccess = createAction('[NowPlaying Component] Get Action Success', props<{ nowPlaying: NowPlayingAudio[] }>());
export const getNowPlayingOnFailure = createAction('[NowPlaying Component] Get Action Failure', props<{ error: HttpErrorResponse }>());
export const setMainTrackStatus = createAction('[NowPlaying Component] Set Main', props<{ status: boolean }>());
export const setAmbientTrackStatus = createAction('[NowPlaying Component] Set Ambient', props<{ status: boolean }>());