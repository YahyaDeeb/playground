import { Component, OnInit, Input } from '@angular/core';
import { RatingModel } from '../rating.model';

@Component({
    selector: 'app-feedback',
    templateUrl: 'feedback.component.html',
    styleUrl: './feedback.component.scss'
})
export class FeedbackComponent implements OnInit {

    @Input() theData: RatingModel | null = null;

    constructor(

    ) { }

    ngOnInit() { }
}