import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signIn', component:SignupComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'sample', component:SampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
