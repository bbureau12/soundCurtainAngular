import { Component, Input } from "@angular/core";
import { getRandomImage } from "../flavor-img/store/flavor-img.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.interfaces";
import { getSettings } from "src/app/settings/store/settings.actions";
import { Actions, ofType } from "@ngrx/effects";
import { queueActionOnSuccess } from "src/app/actionQueue/store/actionQueue.actions";
import { getNowPlaying } from "src/app/nowPlaying/store/nowPlaying.actions";

@Component({
    selector: 'sc-clock',
    templateUrl: './clock.component.html',
    styleUrls: [ './clock.component.css' ]
  })
export class ClockComponent  {
    nowPlayingCountdown = 0;
    date = '';
    hours:any;
    minutes:any;
    seconds:any;
    currentLocale: any;
    timeOfDay: string = '';
    count = 0;

    isTwelveHrFormat = false;
    test:any;
    private intervalId: any;

    constructor(private actions$: Actions, private store: Store<AppState>){
    }
    
    ngOnInit() {
        this.intervalId = setInterval(() => {
            const currentDate = new Date();
            this.date = currentDate.toLocaleTimeString();
            this.calculateTimeOfDay();
            this.runTimers();
        }, 1000);
        this.actions$.pipe(
          ofType(queueActionOnSuccess)
        ).subscribe(() => {
          // Call your method when the action is dispatched
          this.onQueueActionSuccess();
        });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      console.log('destroying interval ID.')
        clearInterval(this.intervalId); // Clear interval on component destruction
    }
}
  onQueueActionSuccess(){
    console.log('onQueueActionSuccess called in clock component.')
    this.nowPlayingCountdown = 3
  }

// TODO: Implement timer managers to allow other components to add actions to call.
    runTimers() {
      this.count = this.count + 1;
      if (this.count % 2 == 0 && this.nowPlayingCountdown > 0)
      {


      }
      if (this.count % 5 == 0)
      {
        console.log('in 5');
      }
      if (this.count % 10 == 0)
      {
        console.log('in 10');
      }
      if (this.count % 30 == 0)
      {
        console.log('in 30');
      }
      if (this.count % 60 == 0)
      {
        console.log('in 60.  Getting image.');
        this.store.dispatch(getRandomImage());
      }
      if (this.count >= 500)
      {
        console.log('in 5 min');
        this.count = 0;
      }
    }

    calculateTimeOfDay() {
      const currentHour = new Date().getHours();
  
      if (currentHour >= 6 && currentHour < 11) {
        this.timeOfDay = 'morning';
      } else if (currentHour >= 11 && currentHour < 18) {
        this.timeOfDay = 'afternoon';
      }
      else if (currentHour >= 18 && currentHour < 20) {
        this.timeOfDay = 'evening';
      }
       else {
        this.timeOfDay = 'night';
      }
    }
  }