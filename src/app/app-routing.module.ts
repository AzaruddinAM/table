import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDisplayComponent } from './table-display/table-display.component';



const routes:Routes=[{
  path:"",component:TableDisplayComponent
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
