import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipspagePageRoutingModule } from './tipspage-routing.module';

import { TipspagePage } from './tipspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipspagePageRoutingModule
  ],
  declarations: [TipspagePage]
})
export class TipspagePageModule {}
