import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { SignupPanelComponent } from './signup-panel/signup-panel.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    component: LoginPageComponent,
    children: [
      {
        path: 'login',
        component: LoginPanelComponent,
        pathMatch: 'full',
      },
      {
        path: 'signup',
        component: SignupPanelComponent,
        pathMatch: 'full',
      }
    ],
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
