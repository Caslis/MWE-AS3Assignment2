import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipspagePage } from './tipspage.page';

const routes: Routes = [
  {
    path: '',
    component: TipspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipspagePageRoutingModule {}
