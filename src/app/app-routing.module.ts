import { RegisterCompleteComponent } from './registerComplete/registerComplete.component';
import { RegisterEmpresaComponent } from './registerEmpresa/registerEmpresa.component';
import { AboutComponent } from './about/about.component';
import { RegisteruserComponent } from './registerUser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoEleccionComponent } from './catalogoEleccion/catalogoEleccion.component';
import { PerfilParticularComponent } from './perfilParticular/perfilParticular.component';
import { UploadItemComponent } from './uploadItem/uploadItem.component';


const routes: Routes = [
  {path:"", component:HomeComponent,pathMatch:"full"},
  {path:"about", component:AboutComponent},
  {path:"catalogoEleccion", component:CatalogoEleccionComponent},
  {path:"login", component:LoginComponent},
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
