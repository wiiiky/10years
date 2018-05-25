import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'app/page/login/login-page.component';
import { HomePageComponent } from 'app/page/home/home-page.component';
import { MainPageComponent } from 'app/page/main/main-page.component';
import { ProfilePageComponent } from 'app/page/profile/profile-page.component';
import { LoginPanelComponent } from 'app/page/login-panel/login-panel.component';
import { SignupPanelComponent } from 'app/page/signup-panel/signup-panel.component';
import { TopicPageComponent } from 'app/page/topic/topic-page.component';
import { SearchPageComponent } from 'app/page/search/search-page.component';


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
      {
        path: 'topic/:id',
        component: TopicPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: SearchPageComponent,
        pathMatch: 'full',
      }
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
