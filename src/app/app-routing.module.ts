import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { RegisterComponent } from './components/register/register.component';
import {PruebasComponent} from './pruebas/pruebas.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ChatBaseComponent } from './components/chat/chat-base/chat-base.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireAuthGuard, loggedIn, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: 'content/:id',component : PageContentComponent, 
  },
  {
    path: '', redirectTo:'/principal', pathMatch: 'full'
  },
   {
    path: 'principal', component: MainPageComponent, 
   },
  {
    path: 'login', component: LoginComponent, 
  },
  {
    path: 'register', component: RegisterComponent, 
  },
  {
    path: 'pruebas', component: PruebasComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}
  },


  {
    path: 'chat', component: ChatBaseComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
