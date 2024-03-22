import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from "@ngrx/store";

export const queueAction = createAction('[ActionQueue Component] Queue Action', props<{ actionId: number }>());
export const queueActionOnSuccess = createAction('[ActionQueue Component] Queue Action Success');
export const queueActionOnFailure = createAction('[ActionQueue Component] Queue Action Failure', props<{ error: HttpErrorResponse }>());