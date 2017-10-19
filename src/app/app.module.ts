import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent }  from './app.component';
import { AddProductModule } from './add/add.module';
import { ProductDetailComponent } from './product-detail.component';
import { CartModule }    from './cart/cart.module';
import { CartService } from './cart/cart.service';

@NgModule({
  imports:      [ BrowserModule, 
    CartModule,
    AddProductModule,
    FormsModule 
  ],
  declarations: [ AppComponent,
    ProductDetailComponent ],
    providers: [ CartService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
