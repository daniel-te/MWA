import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { CartComponent }      from './cart.component';
import { PricePipe }          from './price.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ PricePipe, CartComponent ],
    exports:      [ CartComponent ]
})
export class CartModule{ 
    
}
