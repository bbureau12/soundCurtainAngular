import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.interfaces";

export const selectSettingsState = (state: AppState) => state.settingsState;
// Select the randomSound from the sound feature state
export const selectSettings = createSelector(
  selectSettingsState,
    (state) => state.settings?.filter(setting => setting.IsPublic!=0)
  );
  