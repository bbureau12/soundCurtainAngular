import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.interfaces";

export const selectSettingsState = (state: AppState) => state.settingsState;
// Select the randomSound from the sound feature state
export const selectSettings = createSelector(
  selectSettingsState,
    (state) => { 
      if (state.settings != undefined && state.settings.length >0)
      {
        return state.settings?.filter(setting => setting.IsPublic!=0)
      }
      return []
    }
  );
  