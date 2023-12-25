import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TestService {

    constructor(
        private http: HttpClient
    ) { }

    getInfo() {

        return this.http.get('https://run.mocky.io/v3/8fbc5d81-5ee7-4a11-98bd-c21752e2e9c5');
    }
}