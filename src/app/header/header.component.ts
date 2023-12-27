import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

    constructor(
        private _testService: TestService
    ) { }

    ngOnInit() { }

    emitAVal() {

        this._testService.testBehavior.next('this is emitted from a behavior subject');
    }
}