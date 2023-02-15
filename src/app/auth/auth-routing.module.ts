import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./introduction/introduction.module').then(m => m.IntroductionModule)
      },
      {
        path: 'skywallet',
        loadChildren: () => import('./create-skywallet/create-skywallet.module').then(m => m.CreateSkywalletModule)
      },

      {
        path: 'localwallet',
        loadChildren: () => import('./create-localwallet/create-localwallet.module').then(m => m.CreateLocalwalletModule)
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
