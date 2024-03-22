import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { environment } from '../environments/environment';
import { NowPlayingAudio } from '../common/models/nowPlayingAudio';

@Injectable()
export class NowPlayingService  {
    private domainClientBaseUrl: string;

    constructor(private http: HttpClient, private store: Store<AppState>) {
        this.domainClientBaseUrl = `${environment.mediaApiUrl}`;
    }

    public getNowPlaying(): Observable<NowPlayingAudio[]> {
        const payload = this.http.get<NowPlayingAudio[]>(`${this.domainClientBaseUrl}/nowPlaying/latest`);
        return  payload;
    }

    public getStream(): Observable<any> {
        return new Observable<any>(observer => {
          const eventSource = new EventSource(`${this.domainClientBaseUrl}/nowPlaying/stream`);
    
          eventSource.onmessage = (event) => {
            observer.next(event.data);
          };
    
          eventSource.onerror = (error) => {
            observer.error(error);
          };
    
          return () => {
            eventSource.close();
          };
        });
      }
}
