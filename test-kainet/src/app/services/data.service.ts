import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private apiUrl = 'https://vercel-node-kainet.vercel.app';

    constructor(private http: HttpClient) { }

    getData(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + "/");
    }

    getTest(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + "/test");
    }

}
