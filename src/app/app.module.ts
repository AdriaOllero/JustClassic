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
import { UploadItemComponent } from './uploadItem/uploadItem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent as ModalComponent } from './modal/modal.component';



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
      ModalComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
