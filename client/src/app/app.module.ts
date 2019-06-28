import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
//form
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { CrudComponent } from './crud/crud.component';


import { ToastrModule } from 'ngx-toastr';


const routes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'templatedrivenform', component: TemplatedrivenComponent },
  { path: 'crud', component: CrudComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    SignupComponent,
    ReactiveformComponent,
    TemplatedrivenComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-top-center'
    // }),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    }),
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
