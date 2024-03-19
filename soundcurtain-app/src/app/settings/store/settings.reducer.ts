import { createReducer, on } from "@ngrx/store";
import { initialSettingState } from "./settings.state";
import { getSettings, getSettingsOnFailure, getSettingsOnSuccess } from "./settings.actions";

export const settingsReducer = createReducer(
    initialSettingState,
    on(getSettings, (state) => ({
        ...state,
        settings:undefined,
        isSettingsErrored: false,
        isSettingsLoading: true
      })),
  on(getSettingsOnFailure, (state, { }) => ({
        ...state,
        settings: undefined,
        isSettingsLoading: false,
        isSettingsErrored: true
      })),
  on(getSettingsOnSuccess, (state, { settings }) => ({
    ...state,
    settings: settings,
    isSettingsLoading: false,
    isSettingsErrored: true
  })));