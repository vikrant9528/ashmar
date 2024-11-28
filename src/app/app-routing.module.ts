import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoitemsComponent } from './todoitems/todoitems.component';
// import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './form/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:FormComponent
  },
  {
    path:'form',
    component:FormComponent,
  },
  {
    path: 'todoitems',
    canActivate:[AuthGuard],
    component: TodoitemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
