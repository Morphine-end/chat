import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './shared/services/auth.service';
import {AngularFireStorageModule,BUCKET, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import { ChatComponent } from './components/chat/chat.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PruebasComponent } from './pruebas/pruebas.component';
import {MatSliderModule } from '@angular/material/slider'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageContentComponent,
    CarruselComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ChatComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule
    
    
  ],
  providers: [AuthService, {provide: BUCKET, useValue:"flag-d9cb2.appspot.com"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
