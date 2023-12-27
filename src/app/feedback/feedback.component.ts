import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RatingModel } from '../rating.model';
import { RatingComponent } from './rating/rating.component';

@Component({
    selector: 'app-feedback',
    templateUrl: 'feedback.component.html',
    styleUrl: './feedback.component.scss'
})
export class FeedbackComponent implements OnInit {

    @Input() theData: RatingModel | null = null;
    @ViewChild(RatingComponent) theRating!: RatingComponent;

    constructor(

    ) { }

    ngOnInit() { }

    handleClick(val: any) {

        console.log('value', val);
    }

    runTheRating() {

        this.theRating.test();
    }
}