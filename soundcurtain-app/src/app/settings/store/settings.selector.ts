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
  
  export const selectIsScheduleRunning = createSelector(
    selectSettingsState,
      (state) => { 
        console.log('settings', state)
         const foundSetting = state?.settings?.find(i => i.Key.toLowerCase() == 'databaseoverride' );
         if (foundSetting)
         {
          console.log('setting', foundSetting)
            return foundSetting.Value=='0'
         }
         return false;
      }
    );