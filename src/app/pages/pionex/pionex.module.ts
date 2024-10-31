import { NgModule } from '@angular/core';
import {PionexRoutingModule, routedComponents } from './pionex-routing.module';

@NgModule({
  imports: [
    PionexRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class PionexModule { }
