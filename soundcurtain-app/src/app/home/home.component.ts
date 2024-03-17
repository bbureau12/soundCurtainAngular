import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'soundcurtain-app';
  public isMainActive = false;
  public isAmbientActive = false;
  public isScheduleRunning = true;

  public toggleMainActive(){
    console.log('button click hit.');
    this.isMainActive = !this.isMainActive;
  }
  public toggleAmbientActive(){
    console.log('button click hit.');
    this.isAmbientActive = !this.isAmbientActive;
  }
}
