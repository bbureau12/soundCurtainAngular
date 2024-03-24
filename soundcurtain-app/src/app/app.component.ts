import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Subscription } from 'rxjs';
import { NowPlayingService } from './services/nowPlayingService';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.interfaces';
import { NowPlayingEntry } from './common/models/nowplayingEntry';
import { setAmbientTrackStatus, setMainTrackStatus } from './nowPlaying/store/nowPlaying.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
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
