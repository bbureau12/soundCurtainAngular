import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.interfaces";

export const selectState = (state: AppState) => state.timeState;
// Select the randomSound from the sound feature state
export const selectCurrentTimeClass = createSelector(
  selectState,
    (state) => { 
      return state.currentTimeClass;
    }
  );
  