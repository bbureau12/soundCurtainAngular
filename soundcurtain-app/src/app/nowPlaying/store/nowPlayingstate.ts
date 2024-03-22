import { NowPlayingAudio } from "src/app/common/models/nowPlayingAudio";

export interface NowPlayingState {
    payload: NowPlayingAudio[];
    isLoading: boolean;
    isErrored: boolean;
    isMainPlaying: boolean;
    isAmbientPlaying: boolean;
  }
  
  export const initialNowPlayingState: NowPlayingState = {
    payload: [],
    isLoading: false,
    isErrored: false,
    isMainPlaying: false,
    isAmbientPlaying: false
  };