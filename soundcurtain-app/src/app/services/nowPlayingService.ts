import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { environment } from '../environments/environment';
import { NowPlayingAudio } from '../common/models/nowPlayingAudio';
import { generateGUID } from '../common/Helpers/string-helpers';

@Injectable()
export class NowPlayingService implements OnDestroy {
    private domainClientBaseUrl: string;
    private eventSource?: EventSource;
    private streamId = generateGUID();
    constructor(private http: HttpClient, private store: Store<AppState>) {
        this.domainClientBaseUrl = `${environment.mediaApiUrl}`;
    }
    ngOnDestroy(): void {
      if (this.eventSource)
      {
        this.eventSource.close();
      }
      this.closeStream();
    }

    public clearSource(): void {
      if (this.eventSource)
      {
        this.eventSource.close();
      }
      this.closeStream();
    }

    public getNowPlaying(): Observable<NowPlayingAudio[]> {
        const payload = this.http.get<NowPlayingAudio[]>(`${this.domainClientBaseUrl}/nowPlaying/latest`);
        return  payload;
    }

    public closeStream(): void {
       this.http.delete(`${this.domainClientBaseUrl}/nowPlaying/stream/${this.streamId}`).subscribe({
        next: (response) => {
          console.log('Stream closed successfully', response);
        },
        error: (error) => {
          console.error('Error closing stream', error);
        }
      });
    }

    public getStream(): Observable<any> {
        return new Observable<any>(observer => {
          this.eventSource = new EventSource(`${this.domainClientBaseUrl}/nowPlaying/stream/${this.streamId}`);
    
          this.eventSource.onmessage = (event) => {
            observer.next(event.data);
          };
    
          this.eventSource.onerror = (error) => {
            observer.error(error);
          };
    
          return () => {
            if (this.eventSource)
            {
              this.eventSource.close();
            }
          };
        });
      }
}
