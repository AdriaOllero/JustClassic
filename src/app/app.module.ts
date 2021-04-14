import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registerUser/registeruser.component';
import { RegisterEmpresaComponent } from './registerEmpresa/registerEmpresa.component';
import { RegisterCompleteComponent } from './registerComplete/registerComplete.component';
import { CatalogoEleccionComponent } from './catalogoEleccion/catalogoEleccion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilParticularComponent } from './perfilParticular/perfilParticular.component';



@NgModule({
  declarations: [
    AppComponent,
      TopbarComponent,
      FooterComponent,
      HomeComponent,
      AboutComponent,
      CatalogoComponent,
      LoginComponent,
      RegisteruserComponent,
      RegisterEmpresaComponent,
      RegisterCompleteComponent,
      CatalogoEleccionComponent,
      PerfilParticularComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
