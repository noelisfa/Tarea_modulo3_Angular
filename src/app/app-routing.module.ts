import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
 {path: '', component:IndexComponent},
 {path: 'dashboard', component:DashboardComponent},
 {path: '**', component:ErrorComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule] 
})
export class AppRoutingModule { }
