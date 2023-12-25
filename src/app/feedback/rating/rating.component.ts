import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: 'rating.component.html',
    styleUrl: './rating.component.scss'
})
export class RatingComponent implements OnInit {

    @Input() rating: number | null = null;

    constructor(

    ) { }

    ngOnInit() { }

    floor(val: number) {

        return Math.floor(val);
    }
}