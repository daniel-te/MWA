import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add.component';

@NgModule({
    declarations: [ AddProductComponent ],
    exports: [ AddProductComponent ],
    imports     : [ CommonModule, FormsModule ]
})
export class AddProductModule {}