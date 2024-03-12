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
  
    isTwelveHrFormat = false;
    test:any;
    constructor(){
      setInterval(() =>{
     const currentDate = new Date();
     this.date = currentDate.toLocaleTimeString();
      }, 1000);
    }
  }