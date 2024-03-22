import { createReducer, on } from "@ngrx/store";
import { initialNowPlayingState } from "./nowPlayingstate";
import { getNowPlaying, getNowPlayingOnFailure, getNowPlayingOnSuccess, setAmbientTrackStatus, setMainTrackStatus } from "./nowPlaying.actions";

export const nowPlayingReducer = createReducer(
  initialNowPlayingState,
  on(getNowPlaying, (state) => ({
    ...state,
    isLoading: true,
    isErrored: false
  })),
  on(getNowPlayingOnSuccess, (state, { nowPlaying }) => ({
    ...state,
    payload: nowPlaying,
    isLoading: false,
    isErrored: false
  })),
  on(getNowPlayingOnFailure, (state, { }) => ({
    ...state,
    isLoading: false,
    isErrored: false
  })),
  on(setAmbientTrackStatus, (state, { status }) => ({
    ...state,
    isAmbientPlaying: status
  })),
  on(setMainTrackStatus, (state, { status }) => ({
    ...state,
    isMainPlaying: status
  }))
  );