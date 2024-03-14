import { createReducer, on } from "@ngrx/store";
import { initialImgState } from "./flavor-img.state";
import { getRandomImage, getRandomImageOnFailure, getRandomImageOnSuccess } from "./flavor-img.actions";

export const imageReducer = createReducer(
    initialImgState,
    on(getRandomImage, (state) => ({
        ...state,
        randomImg: undefined,
        isRandImgErrored: false,
        isRandImgLoading: true
      })),
  on(getRandomImageOnFailure, (state, { }) => ({
        ...state,
        randomImg: undefined,
        isRandImgErrored: false,
        isRandImgLoading: true
      })),
  on(getRandomImageOnSuccess, (state, { image }) => ({
    ...state,
    randomImg: image,
    isRandImgErrored: false,
    isRandImgLoading: true
  })));