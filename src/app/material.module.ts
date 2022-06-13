import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [
    CommonModule,MatToolbarModule,MatCardModule,MatInputModule,MatButtonModule,MatSelectModule,MatCheckboxModule
  ],

exports: [MatToolbarModule, MatCardModule,MatInputModule,MatButtonModule,MatSelectModule,MatCheckboxModule]

})

export class MaterialModule{


}
