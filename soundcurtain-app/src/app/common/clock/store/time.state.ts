import { Setting } from "src/app/common/models/setting";

export interface TimeState {
    currentTimeClass: string;
  }
  
  export const initialTimeState: TimeState = {
    currentTimeClass: 'afternoon'
  };