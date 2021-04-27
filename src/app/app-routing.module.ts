import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilParticularComponent } from './components/perfil/perfilParticular/perfilParticular.component';
import { UploadItemComponent } from './uploadItem/uploadItem.component';
import { RegisterEmpresaComponent } from './components/register/registerEmpresa/registerEmpresa.component';
import { RegisterCompleteComponent } from './components/register/registerComplete/registerComplete.component';
import { RegisteruserComponent } from './components/register/registerUser/registeruser.component';
import { LoginComponent } from './components/login/login/login.component';
import { CatalogoEleccionComponent } from './components/catalogo/catalogoEleccion/catalogoEleccion.component';
import { CatalogoComponent } from './components/catalogo/catalogo/catalogo.component';
import { AboutComponent } from './components/main/about/about.component';
import { HomeComponent } from './components/main/home/home.component';
import { CatalogoHomeComponent } from './components/catalogo/catalogoHome/catalogoHome.component';
import { CatalogoTopBarComponent } from './components/catalogo/catalogoTopBar/catalogoTopBar.component';

const routes: Routes = [
  {path:"", component:HomeComponent,pathMatch:"full"},
  {path:"about", component:AboutComponent},
  {path:"catalogo", component:CatalogoComponent},
  {path:"catalogoEleccion", component:CatalogoEleccionComponent},
  {path:"login", component:LoginComponent},
  {path:"catalogoTopBar", component:CatalogoTopBarComponent},
  {path:"catalogoHome", component:CatalogoHomeComponent},
  {path:"registerUser", component:RegisteruserComponent},
  {path:"registerComplete", component:RegisterCompleteComponent},
  {path:"registerEmpresa", component:RegisterEmpresaComponent},
  {path:"uploadItem", component:UploadItemComponent},
  {path:"perfilParticular", component: PerfilParticularComponent},
  {path:"*", redirectTo:"/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
