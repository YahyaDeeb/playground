import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { RatingModel } from './rating.model';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [TestService]
})
export class AppComponent implements OnInit {

  // testing = 'eee';
  info: RatingModel[] = [];

  title = 'playground';

  constructor(
    public x: TestService,
    private router: Router
  ) {

    this.x.getInfo().subscribe((res: any) => {

      this.info = res;
    })
  }

  changeTestValue() {

    this.x.setTestValue('from appComponent');
  }

  navToLogin() {

    this.router.navigate(['login']);
  }

  ngOnInit(): void {

    // this.listenToButtonEvents();
    this.listenToMouseClickPosition();
  }

  listenToButtonEvents() {

    const element = document.getElementById('myButton');
    const clickObservable = fromEvent(element as any, 'click');
    clickObservable.subscribe((eee) => console.log('Button clicked!', eee));
  }

  listenToMouseClickPosition() {

    const documentClick$ = fromEvent(document, 'click');

    documentClick$.subscribe((event: any) => {
      console.log('Mouse clicked at:', { x: event.clientX, y: event.clientY });
      // Perform actions with the mouse coordinates
    });
  }
}
