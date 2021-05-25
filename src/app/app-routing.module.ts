import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilParticularComponent } from './components/perfil/perfilParticular/perfilParticular.component';
import { UploadItemComponent } from './components/catalogo/item/uploadItem/uploadItem.component';
import { RegisterEmpresaComponent } from './components/register/registerEmpresa/registerEmpresa.component';
import { RegisterCompleteComponent } from './components/register/registerComplete/registerComplete.component';
import { RegisteruserComponent } from './components/register/registerUser/registeruser.component';
import { LoginComponent } from './components/login/login/login.component';
import { CatalogoEleccionComponent } from './components/catalogo/catalogoEleccion/catalogoEleccion.component';
import { CatalogoComponent } from './components/catalogo/catalogo/catalogo.component';
import { AboutComponent } from './components/main/about/about.component';
import { HomeComponent } from './components/main/home/home.component';
import { CatalogoHomeComponent } from './components/catalogo/catalogoHome/catalogoHome.component';
import { ItemDetailComponent } from './components/catalogo/item/itemDetail/itemDetail.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'itemDetail', component: ItemDetailComponent },
  { path: 'catalogoEleccion', component: CatalogoEleccionComponent },
  { path: 'login', component: LoginComponent},
  { path: 'catalogoHome', component: CatalogoHomeComponent },
  { path: 'registerUser', component: RegisteruserComponent },
  { path: 'registerComplete', component: RegisterCompleteComponent },
  { path: 'registerEmpresa', component: RegisterEmpresaComponent },
  { path: 'uploadItem', component: UploadItemComponent},

  { path: 'perfilParticular', component: PerfilParticularComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [

    ]
  },
  { path: '*', redirectTo: '/404' },
];
//EL ---canActivate : [AuthGuardService], ---  Se pone en las rutas que consideremos que necesitan autentificacion
// canActivate: [AuthGuardService],
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
