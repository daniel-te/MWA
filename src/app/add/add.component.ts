import { Product } from './../product';
import { PRODUCTS } from './../mock-products';
import { AddProductModule } from './add.module';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'add-product',
    templateUrl: './addproduct.template.html'
})
export class AddProductComponent implements OnInit {

    ngOnInit() {
    }

    submit(form:any) {
        if (!form.errors) {
            const newProd = new Product();
            newProd.id = form.value.id_prod;
            newProd.name = form.value.name;
            newProd.description = form.value.description;
            newProd.price = form.value.price;
            newProd.condition = form.value.condition;
            newProd.category = form.value.category;
            PRODUCTS.push(newProd);
        } else {
            console.log("errors");
        }
        console.log(form);
    }
}