import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.interfaces";

export const nowPlayingState = (state: AppState) => state.nowPlayingState;
// Select the randomSound from the sound feature state
export const selectMainStatus = createSelector(
  nowPlayingState,
    (state) => { 
      return state.isMainPlaying;
    }
  );
  

  export const selectAmbientStatus = createSelector(
    nowPlayingState,
      (state) => { 
        return state.isAmbientPlaying;
      }
    );