import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interfaces';
import { imageReducer } from '../common/flavor-img/store/flavor-img.reducer';
import { settingsReducer } from '../settings/store/settings.reducer';
import { nowPlayingReducer } from '../nowPlaying/store/nowPlaying.reducer';
export const reducers: ActionReducerMap<AppState> = {
  imgState: imageReducer,
  settingsState: settingsReducer,
  nowPlayingState: nowPlayingReducer,
};
