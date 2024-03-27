import { createReducer, on } from "@ngrx/store";
import { initialTimeState } from "./time.state";
import { setTimeClass } from "./time.actions";

export const timeReducer = createReducer(
  initialTimeState,
    on(setTimeClass, (state, {value}) => ({
        ...state,
        currentTimeClass: value,
      }))
      );