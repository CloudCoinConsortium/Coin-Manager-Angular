import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSkyDashComponent } from './create-sky-dash.component';

const routes: Routes = [
  {
    path: '',
    component: CreateSkyDashComponent,
    children: [
      {
        path: 'new-address',
        loadChildren: () => import('./create-add-dash/create-add-dash.module').then(m => m.CreateAddDashModule)
      },

      {
        path: '',
        loadChildren: () => import('./advanced-dash/advanced-dash.module').then(m => m.AdvancedDashModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSkyDashRoutingModule { }
