import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interfaces';
import { imageReducer } from '../common/flavor-img/store/flavor-img.reducer';

export const reducers: ActionReducerMap<AppState> = {
  imgState: imageReducer,
};
