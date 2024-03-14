import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from "@ngrx/store";
import { Image } from "../../models/image";

export const getRandomImage = createAction('[Image Component] RandomFile');
export const getRandomImageOnSuccess = createAction('[Image Component] RandomFile Success', props<{ image: Image }>());
export const getRandomImageOnFailure = createAction('[Image Component] RandomFile Failure', props<{ error: HttpErrorResponse }>());