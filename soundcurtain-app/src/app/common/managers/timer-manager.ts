import { Timer } from "../models/timer";

export class TimerManager {
    
    private static instance: TimerManager | null = null;
    timers: Timer[];

    private constructor() {
        this.timers = [];
    }

    static getInstance(): TimerManager {
        if (!TimerManager.instance) {
            TimerManager.instance = new TimerManager();
        }
        return TimerManager.instance;
    }

    addTimer(timer: Timer) {
        this.timers.push(timer);
    }

    removeTimer(timer: Timer) {
        const index = this.timers.indexOf(timer);
        if (index !== -1) {
            this.timers.splice(index, 1);
        }
    }
}
