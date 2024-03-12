import { Component } from "@angular/core";

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

    isTwelveHrFormat = false;
    test:any;
    constructor(){
      setInterval(() =>{
     const currentDate = new Date();
     this.date = currentDate.toLocaleTimeString();
     this.calculateTimeOfDay()
      }, 1000);
    }

    calculateTimeOfDay() {
      const currentHour = new Date().getHours();
  
      if (currentHour >= 6 && currentHour < 11) {
        this.timeOfDay = 'morning';
      } else if (currentHour >= 11 && currentHour < 18) {
        this.timeOfDay = 'afternoon';
      }
      else if (currentHour >= 18 && currentHour < 20) {
        this.timeOfDay = 'sunset';
      }
       else {
        this.timeOfDay = 'night';
      }
    }
  }