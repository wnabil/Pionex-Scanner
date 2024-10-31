import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PionexScreenerComponent } from './screener/pionex-screener.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'screener',
      component: PionexScreenerComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PionexRoutingModule { }

export const routedComponents = [
  PionexScreenerComponent
];
