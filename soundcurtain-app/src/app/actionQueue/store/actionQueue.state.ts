import { Setting } from "src/app/common/models/setting";

export interface SettingsState {
    isQueueAddLoading: boolean;
    isQueueAddErrored: boolean;
  }
  
  export const initialQueueState: SettingsState = {
    isQueueAddLoading: false,
    isQueueAddErrored: false
  };