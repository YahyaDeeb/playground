import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TestGuard } from './guards/test.guard';
import { TestResolver } from './testresolver.component';

const routes: Routes = [

  {
    path: 'users',
    loadChildren: () => import('./users.module').then(
      (m) => m.UsersModule
    ),
  },
  {
    path: 'users/:theID',
    resolve: { data: TestResolver },
    component: UserDetailsComponent
  },
  {
    path: 'x',
    component: AboutUsComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [TestGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
