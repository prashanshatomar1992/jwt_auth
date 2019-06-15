import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from '../login/login.component';


@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path:'login',component:LoginComponent
            }
        ])
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardRoutesModule { }
