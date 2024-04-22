import { Routes } from '@angular/router';
import { WalkthroughPage } from './pages/walkthrough/walkthrough.page';
import { MainPage } from './pages/main/main.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/account',
    pathMatch: 'full',
  },
  {
    path: 'login/account',
    loadComponent: () => import('./pages/login-account/login-account.page').then( m => m.LoginAccountPage)
  },
  {
    path: 'create/account',
    loadComponent: () => import('./pages/create-account/create-account.page').then( m => m.CreateAccountPage)
  },
  {
    path: 'recover/account',
    loadComponent: () => import('./pages/recover-account/recover-account.page').then( m => m.RecoverAccountPage)
  },
  {
    path: 'reset/account',
    loadComponent: () => import('./pages/reset-account/reset-account.page').then( m => m.ResetAccountPage)
  },
  {
    path: 'block/account',
    loadComponent: () => import('./pages/block-account/block-account.page').then( m => m.BlockAccountPage)
  },
  {
    path: 'walkthrough',
    component: WalkthroughPage,
    children: [
      {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
      },
      {
        path: 'first',
        loadComponent: () => import('./pages/walkthrough/first/first.page').then( m => m.FirstPage)
      },
      {
        path: 'second',
        loadComponent: () => import('./pages/walkthrough/second/second.page').then( m => m.SecondPage)
      },
      {
        path: 'third',
        loadComponent: () => import('./pages/walkthrough/third/third.page').then( m => m.ThirdPage)
      },
    ]
  },
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/main/home/home.page').then( m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/main/search/search.page').then( m => m.SearchPage)
      },
    ]
  },



];
