import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from "@ngrx/store";

export const setTimeClass = createAction('[Clock Component] Set Class Action', props<{ value: string }>());