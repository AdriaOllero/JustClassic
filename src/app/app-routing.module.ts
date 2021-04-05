import { AboutComponent } from './about/about.component';
import { RegisteruserComponent } from './registerUser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent,pathMatch:"full"},
  {path:"about", component:AboutComponent},
  {path:"catalogo", component:CatalogoComponent},
  {path:"login", component:LoginComponent},
  {path:"registerUser", component:RegisteruserComponent},
  {path:"*", redirectTo:"/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
