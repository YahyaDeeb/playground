import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
    selector: 'app-rating',
    templateUrl: 'rating.component.html',
    styleUrl: './rating.component.scss',
    // providers: [TestService]
})
export class RatingComponent implements OnInit {

    @Input() rating: number | null = null;
    @Output() starClick: EventEmitter<any> = new EventEmitter();

    constructor(

        public _testServ: TestService
    ) {

        this.listenToSubject();
    }

    ngOnInit() { }

    floor(val: number) {

        return Math.floor(val);
    }

    emitTheClick(theIndex: number) {

        this.starClick.emit(theIndex);
    }

    test() {

        console.log('test is working');
    }

    listenToSubject() {

        this._testServ.testBehavior$.subscribe((result) => {

            console.log('resss', result);
        });
    }

    changeTestValue() {

        this._testServ.setTestValue('from rating');
    }
}