import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './main_body/container/container.component';


const routes: Routes = [
  {
    path:"",
    redirectTo: "/container",
    pathMatch: "full"
  },
  {
    path: "container",
    component: ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
