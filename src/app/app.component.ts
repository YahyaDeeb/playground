import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { RatingModel } from './rating.model';
import { TestService } from './test.service';

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
  myForm: any;
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 20));

  constructor(
    public x: TestService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.x.getInfo().subscribe((res: any) => {

      this.info = res;
    })

    this.myForm = this.formBuilder.group({

      username: ['', Validators.required],
      email: '',
      test: '',
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.validateIfPasswordsAreEqual()]],
      dob: ['', Validators.required]
    });

    this.myForm.get('password').valueChanges.subscribe(() => {

      this.myForm.get('confirmPassword').updateValueAndValidity();
    });
  }

  validateIfPasswordsAreEqual(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const formGroup = control.parent;
      const password = formGroup?.get('password')?.value;
      const confirmationPassword = control.value;

      return password && confirmationPassword && password !== confirmationPassword
        ? { passwordsNotEqual: true }
        : null;
    };
  }

  moreThan20Validator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const selectedDate = control.value;
      if (!selectedDate) {
        return null; // No value, so no validation error.
      }

      const thisYear = new Date().getFullYear();
      const year = new Date(selectedDate).getFullYear();

      return thisYear - year >= 20 ? null : { tooYoung: true };
    };
  }

  submitForm() {

    if (this.myForm.invalid) {

      this.myForm.markAllAsTouched();
    }
    else {

      console.log('vaa', this.myForm.value)
    }
  }

  changeTestValue() {

    this.x.setTestValue('from appComponent');
  }

  navToLogin() {

    this.router.navigate(['login']);
  }

  ngOnInit(): void {

    // this.listenToButtonEvents();
    // this.listenToMouseClickPosition();
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
