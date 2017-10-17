"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_1 = require("./product");
var cart_service_1 = require("./cart/cart.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    ProductDetailComponent.prototype.addToCart = function (prod) {
        this.shoppingCart.addProduct(prod);
    };
    return ProductDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", product_1.Product)
], ProductDetailComponent.prototype, "product", void 0);
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        template: "\n   <div *ngIf=\"product\">\n     <h2>{{product.name}} details!</h2>\n     <div><label>id: </label>{{product.id}}</div>\n     <div>\n       <label>name: </label>\n       <input [(ngModel)]=\"product.name\" placeholder=\"name\"/>\n     </div>\n     <div><label>Description: </label>{{product.description}}</div>\n     <div><label>Price: </label>{{product.price}}</div>\n     <div><label>Condition: </label>{{product.condition}}</div>\n     <div><label>Category: </label>{{product.category}}</div>\n     <div><button (click)=\"addToCart(product)\">Add to Shopping Cart</button></div>\n   </div>\n "
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map