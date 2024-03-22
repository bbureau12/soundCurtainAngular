import { ImageState as FlavorImgState } from "../common/flavor-img/store/flavor-img.state";
import { NowPlayingState } from "../nowPlaying/store/nowPlayingstate";
import { SettingsState } from "../settings/store/settings.state";
export interface AppState {
    imgState: FlavorImgState;
    settingsState: SettingsState;
    nowPlayingState: NowPlayingState;
  }