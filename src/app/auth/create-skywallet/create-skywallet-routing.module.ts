import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSkywalletComponent } from './create-skywallet.component';

const routes: Routes = [
  {
    path: '',
    component: CreateSkywalletComponent,
    children: [
      {
        path: '',
        redirectTo: 'create-address',
        pathMatch: 'full'
      },
      {
        path: 'create-address',
        loadChildren: () => import('./create-address/create-address.module').then(m => m.CreateAddressModule)
      },
      {
        path: 'upload-cc',
        loadChildren: () => import('./advanced-setup/advanced-setup.module').then(m => m.AdvancedSetupModule)
      },
      {
        path: 'completed',
        loadChildren: () => import('./completed/completed.module').then(m => m.CompletedModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSkywalletRoutingModule { }
