import { Component } from '@angular/core';
import { TestService } from './test.service';
import { RatingModel } from './rating.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [TestService]
})
export class AppComponent {

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
}
