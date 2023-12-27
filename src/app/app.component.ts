import { Component } from '@angular/core';
import { TestService } from './test.service';
import { RatingModel } from './rating.model';

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
    public x: TestService
  ) {

    this.x.getInfo().subscribe((res: any) => {

      this.info = res;
    })
  }

  changeTestValue() {

    this.x.setTestValue('from appComponent');
  }
}
