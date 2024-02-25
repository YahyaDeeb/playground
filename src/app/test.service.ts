import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    testValue = '';
    testBehavior: BehaviorSubject<string> = new BehaviorSubject('heyyyy');
    testBehavior$ = this.testBehavior.asObservable();

    constructor(
        private http: HttpClient
    ) { }

    getInfo() {

        return this.http.get('https://run.mocky.io/v3/8fbc5d81-5ee7-4a11-98bd-c21752e2e9c5');
    }

    getInfoById(id: string) {

        return this.http.get('https://run.mocky.io/v3/' + id);
    }

    setTestValue(val: any) {

        this.testValue = val;
    }
}