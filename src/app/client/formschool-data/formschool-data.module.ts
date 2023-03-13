import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormschoolDataPageRoutingModule } from './formschool-data-routing.module';

import { FormschoolDataPage } from './formschool-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormschoolDataPageRoutingModule
  ],
  declarations: [FormschoolDataPage]
})
export class FormschoolDataPageModule {}
