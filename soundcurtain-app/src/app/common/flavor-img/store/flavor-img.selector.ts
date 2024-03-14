import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.interfaces";

export const selectImageState = (state: AppState) => state.imgState;
// Select the randomSound from the sound feature state
export const selectRandomImage = createSelector(
    selectImageState,
    (state) => state.randomImg
  );
  