import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { environment } from '../environments/environment';
import { Image } from '../common/models/image';

enum MainActions {
    PlayStdMain = 1,
    PlayStandardAmbient = 2,
    StopMain = 4,
    StopAmbient = 5,
    RefreshSettings = 6,
    PlayRandomMain = 7,
    PlayRandomAmbient = 8
}
@Injectable()
export class ActionService  {
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
