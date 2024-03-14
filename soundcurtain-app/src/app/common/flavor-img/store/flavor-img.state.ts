import { Image } from "../../models/image";
export interface ImageState {
    randomImg: Image | undefined;
    isRandImgLoading: boolean;
    isRandImgErrored: boolean;
  }
  
  export const initialImgState: ImageState = {
    randomImg: undefined,
    isRandImgLoading: false,
    isRandImgErrored: false,
  };