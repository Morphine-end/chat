import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { RegisterComponent } from './components/register/register.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  {
    path: 'content',component : PageContentComponent, canActivate: [AuthGuard],
  },
  {
    path: '', redirectTo:'/principal', pathMatch: 'full'
  },
   {
    path: 'principal', component: MainPageComponent, canActivate: [AuthGuard]
   },
  {
    path: 'login', component: LoginComponent, canActivate: [AuthGuard],
  },
  {
    path: 'register', component: RegisterComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pruebas', component: PruebasComponent, canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
