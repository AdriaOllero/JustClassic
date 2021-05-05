import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilParticularComponent } from './components/perfil/perfilParticular/perfilParticular.component';
import { UploadItemComponent } from './components/catalogo/item/uploadItem/uploadItem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CatalogoEleccionComponent } from './components/catalogo/catalogoEleccion/catalogoEleccion.component';
import { RegisterCompleteComponent } from './components/register/registerComplete/registerComplete.component';
import { RegisterEmpresaComponent } from './components/register/registerEmpresa/registerEmpresa.component';
import { RegisteruserComponent } from './components/register/registerUser/registeruser.component';
import { LoginComponent } from './components/login/login/login.component';
import { CatalogoComponent } from './components/catalogo/catalogo/catalogo.component';
import { AboutComponent } from './components/main/about/about.component';
import { HomeComponent } from './components/main/home/home.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { TopbarComponent } from './components/main/topbar/topbar.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CatalogoTopBarComponent } from './components/catalogo/catalogoTopBar/catalogoTopBar.component';
import { CatalogoHomeComponent } from './components/catalogo/catalogoHome/catalogoHome.component';
import { ItemDetailComponent } from './components/catalogo/item/itemDetail/itemDetail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';


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
      PerfilParticularComponent,
      UploadItemComponent,
      CatalogoTopBarComponent,
      CatalogoHomeComponent,
      ItemDetailComponent,

   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    IvyCarouselModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,],
  bootstrap: [AppComponent],
})
export class AppModule { }
