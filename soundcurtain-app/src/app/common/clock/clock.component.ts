import { Component } from "@angular/core";
import { getRandomImage } from "../flavor-img/store/flavor-img.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.interfaces";
import { getSettings } from "src/app/settings/store/settings.actions";

@Component({
    selector: 'sc-clock',
    templateUrl: './clock.component.html',
    styleUrls: [ './clock.component.css' ]
  })
export class ClockComponent  {
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

    constructor(private store: Store<AppState>){
    }
    
    ngOnInit() {
        this.intervalId = setInterval(() => {
            const currentDate = new Date();
            this.date = currentDate.toLocaleTimeString();
            this.calculateTimeOfDay();
            this.runTimers();
        }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      console.log('destroying interval ID.')
        clearInterval(this.intervalId); // Clear interval on component destruction
    }
}

    runTimers() {
      this.count = this.count + 1;
      if (this.count % 5 == 0)
      {
        console.log('in 5');
      }
      if (this.count % 10 == 0)
      {
        console.log('in 10');
        this.store.dispatch(getSettings());
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