import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { environment } from '../environments/environment';
import { Image } from '../common/models/image';

@Injectable()
export class MediaService  {
    private domainClientBaseUrl: string;

    constructor(private http: HttpClient, private store: Store<AppState>) {
        this.domainClientBaseUrl = `${environment.mediaApiUrl}`;
    }

    public getRandomImage(): Observable<Image> {
        //const image = this.http.get<Image>(`${this.domainClientBaseUrl}/image`)
        const image = this.http.get<Image>(`${this.domainClientBaseUrl}/image/random`)
        console.log(image);
        return  image;
    }

}
