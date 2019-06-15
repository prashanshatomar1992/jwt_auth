import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },{
        path: 'login',
        redirectTo: '/login', pathMatch: 'full'
      }
]
@NgModule({
    imports:[],
    exports:[RouterModule]
})
export class AppRoutingModule {}