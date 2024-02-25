import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: 'user-details.component.html',
    styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

    constructor(
        private _route: ActivatedRoute
    ) {

        // const id = this._route.snapshot.params['theID'];
        // const qparams = this._route.snapshot.queryParams;

        // console.log('qparams', qparams);

        this._route.data.subscribe((res) => {


            console.log('resss', res);
        });
    }
}