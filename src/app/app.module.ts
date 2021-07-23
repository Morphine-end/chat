import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import {AngularFireDatabaseModule } from '@angular/fire/database';
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
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PruebasComponent } from './pruebas/pruebas.component';
import {MatSliderModule } from '@angular/material/slider';
import { ChatBaseComponent } from './components/chat/chat-base/chat-base.component';
import { ChatMessComponent } from './components/chat/chat-base/chat-mess/chat-mess.component';
import { UserListComponent } from './components/chat/chat-base/user-list/user-list.component';
import { MessageInputComponent } from './components/chat/chat-base/message-input/message-input.component';
import { MessageComponent } from './components/chat/chat-base/chat-mess/message/message.component'
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { ChatService } from './shared/services/chat.service';
import { UserItemComponent } from './components/chat/chat-base/user-list/user-item/user-item.component';

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
    PruebasComponent,
    ChatBaseComponent,
    ChatMessComponent,
    UserListComponent,
    MessageInputComponent,
    MessageComponent,
    UserItemComponent
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
    MatSliderModule,
    FormsModule,
    RouterModule,
    AngularFireDatabaseModule
    
    
  ],
  providers: [AuthService, ChatService, {provide: BUCKET, useValue:"live-chat-2c487.firebaseapp.com"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
