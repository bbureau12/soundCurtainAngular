import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.interfaces';
import { environment } from '../environments/environment';
import { Setting } from '../common/models/setting';

@Injectable()
export class SettingService  {
    private domainClientBaseUrl: string;

    constructor(private http: HttpClient, private store: Store<AppState>) {
        this.domainClientBaseUrl = `${environment.mediaApiUrl}`;
    }

    public getSettings(): Observable<Setting[]> {
        const payload = this.http.get<Setting[]>(`${this.domainClientBaseUrl}/setting/all`);
        return  payload;
    }

    public updateSettings(settings: Setting[]): Observable<Setting[]> {
        const headers = { 'Content-Type': 'application/json' };
        const url = `${this.domainClientBaseUrl}/setting/upsert`; 
        const body = JSON.stringify({ settings });   
        const payload = this.http.post<Setting[]>(url, body, {headers});
        console.log(payload);
        return  payload;
    }
}
