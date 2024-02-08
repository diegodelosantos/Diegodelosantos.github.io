import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';
import { Vista3Component } from './vista3/vista3.component';
import { Vista4Component } from './vista4/vista4.component';
import { Vista5Component } from './vista5/vista5.component';
import { Vista6Component } from './vista6/vista6.component';

const routes: Routes = [
  {
    path: "vista1",
    component: Vista1Component
  },
  {
    path: "vista2",
    component: Vista2Component
  },
  {
    path: "vista3",
    component: Vista3Component
  },
  {
    path: "vista4",
    component: Vista4Component
  },
  {
    path: "vista5",
    component: Vista5Component
  },{
    path: "vista6",
    component: Vista6Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
