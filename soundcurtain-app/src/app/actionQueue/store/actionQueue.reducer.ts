import { createReducer, on } from "@ngrx/store";
import { initialQueueState } from "./actionQueue.state";
import { queueAction, queueActionOnFailure, queueActionOnSuccess } from "./actionQueue.actions";

export const settingsReducer = createReducer(
  initialQueueState,
    on(queueAction, (state) => ({
        ...state,
        isQueueAddLoading: true,
        isQueueAddErrored: false
      })),
  on(queueActionOnSuccess, (state, { }) => ({
        ...state,
        isQueueAddLoading: false,
        isQueueAddErrored: false
      })),
  on(queueActionOnFailure, (state, { }) => ({
    ...state,
    isQueueAddLoading: false,
    isQueueAddErrored: false
  })));