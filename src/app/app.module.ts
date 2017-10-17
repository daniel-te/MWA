import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { CartModule }    from './cart/cart.module';
import { CartService } from './cart/cart.service';

@NgModule({
  imports:      [ BrowserModule, CartModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [ AppComponent,
    ProductDetailComponent ],
    providers: [ CartService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
