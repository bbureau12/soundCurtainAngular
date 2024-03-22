import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { NowPlayingService } from '../services/nowPlayingService';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { selectAmbientStatus, selectMainStatus } from '../nowPlaying/store/nowPlaying.selector';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {
  title = 'soundcurtain-app';
  public isMainActive = false;
  public isAmbientActive = false;
  public isScheduleRunning = true;
  private subscription?: Subscription;

  constructor(private actions$: Actions, private store: Store<AppState>) {}
 
  public isMainActive$=this.store.select(selectMainStatus);
  public isAmbientActive$=this.store.select(selectAmbientStatus);
  public toggleMainActive(){
    console.log('button click hit.');
    this.isMainActive = !this.isMainActive;
  }
  public toggleAmbientActive(){
    console.log('button click hit.');
    this.isAmbientActive = !this.isAmbientActive;
  }
  public toggleMain(){
    
  }
}
