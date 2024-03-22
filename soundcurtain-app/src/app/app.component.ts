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
export class AppComponent implements OnInit, OnDestroy 
{
  private subscription?: Subscription;
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 5;
  private reconnectDelay = 2000;
  private readonly maxReconnectDelay = 32000; 
  constructor(private actions$: Actions, private nowPlayingService: NowPlayingService, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.subscription = this.nowPlayingService.getStream().subscribe({
      next: (data) => {
        this.parseTracks(data); // Reset to initial delay
        console.log('Received SSE:', data);
      },
      error: (error) => {
        console.error('Error in SSE:', error);
      }
    });
  }
  private subscribeToNowPlaying(): void {
    this.subscription = this.nowPlayingService.getStream().subscribe({
      next: (data) => {
        // Reset reconnection attempts on successful connection
        this.reconnectAttempts = 0;
        this.reconnectDelay = 2000;
        this.parseTracks(data); 
      },
      error: (error) => {
        this.handleReconnect();
      }
    });
  }

  private parseTracks(data: string): void {
     const tracks: NowPlayingEntry[] = JSON.parse(data);
     tracks.forEach((track: NowPlayingEntry)=> {
      if (track.Type.toLowerCase() === "main")
      {
        this.store.dispatch(setMainTrackStatus({status:track.Track!=undefined}));
      }
      if (track.Type.toLowerCase() === "ambient")
      {
        this.store.dispatch(setAmbientTrackStatus({status:track.Track!=undefined}));
      }
     });
     
  }
  private handleReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      console.log(`Attempting to reconnect in ${this.reconnectDelay / 1000} seconds...`);
      setTimeout(() => {
        if (this.subscription) {
          console.log('unsubscribing');
          this.subscription.unsubscribe();
        }
        this.reconnectAttempts++;
        this.reconnectDelay = Math.min(this.reconnectDelay * 2, this.maxReconnectDelay); // Exponential backoff
        this.subscribeToNowPlaying();
      }, this.reconnectDelay);
    } else {
      console.log('Max reconnection attempts reached. Will not attempt to reconnect.');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      console.log('unsubscribing');
      this.subscription.unsubscribe();
    }
  }
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
