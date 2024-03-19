import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { environment } from '../environments/environment';
import { Image } from '../common/models/image';
import { Setting } from '../common/models/setting';

@Injectable()
export class SettingService  {
    private domainClientBaseUrl: string;

    constructor(private http: HttpClient, private store: Store<AppState>) {
        this.domainClientBaseUrl = `${environment.mediaApiUrl}`;
    }

    public getSettings(): Observable<Setting[]> {
        const payload = this.http.get<Setting[]>(`${this.domainClientBaseUrl}/setting/all`)
        console.log(payload);
        return  payload;
    }

}
