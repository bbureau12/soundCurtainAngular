import { Setting } from "src/app/common/models/setting";

export interface SettingsState {
    settings: Setting[] | undefined;
    isSettingsLoading: boolean;
    isSettingsErrored: boolean;
    isSettingsUpdating: boolean;
    isSettingsUpdateErrored: boolean;
  }
  
  export const initialSettingState: SettingsState = {
    settings: undefined,
    isSettingsLoading: false,
    isSettingsErrored: false,
    isSettingsUpdating: false,
    isSettingsUpdateErrored: false,
  };