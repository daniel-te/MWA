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
var cart_service_1 = require("./cart.service");
var core_1 = require("@angular/core");
require("rxjs/add/observable/from");
var CartComponent = (function () {
    function CartComponent(shoppingCart) {
        this.shoppingCart = shoppingCart;
        this.productList = [];
        this.cartTotal = 0;
        this.prodQty = 0;
        this.showProds = false;
        this.toggleMessage = 'Show';
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingCart.requestEvent().subscribe(function ($event) {
            _this.loadCart($event);
        });
    };
    CartComponent.prototype.loadCart = function (l) {
        var _this = this;
        this.productList = [];
        this.cartTotal = 0;
        this.prodQty = 0;
        this.productList = l;
        this.productList.forEach(function (e) {
            _this.prodQty += e.qty;
            _this.cartTotal += e.totalPrice;
        });
    };
    CartComponent.prototype.removeItem = function (prod) {
        this.shoppingCart.removeProduct(prod);
    };
    CartComponent.prototype.toggleViewList = function () {
        this.showProds = !this.showProds;
        this.toggleMessage = this.showProds ? 'Hide' : 'Show';
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'shopping-cart',
        template: "<div style=\"position: fixed; top: 0px; right: 25px; padding: 20px; z-index: 100; min-width: 400px;\">\n    <h2> Shopping cart</h2><br>\n    Products in cart: <strong>{{ prodQty }}</strong><br>\n    Total in cart: <strong>{{ cartTotal | pricepipe }}</strong>\n    <button (click)=\"toggleViewList()\">{{ toggleMessage }} products in cart</button>\n    <table style=\"border: 1px solid black\" class=\"table table-condensed\" *ngIf=\"showProds\" >\n        <thead>\n            <th>Name</th>\n            <th>Unit Price</th>\n            <th>Qty</th>\n            <th>Total Price</th>\n            <th>Remove</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let prod of productList\">\n                <td>{{ prod.prod.name }}</td>\n                <td>{{ prod.prod.price | pricepipe }}</td>\n                <td>{{ prod.qty }}</td>\n                <td>{{ prod.totalPrice | pricepipe }}</td>\n                <td><i class=\"glyphicon glyphicon-remove\" (click)=\"removeItem(prod.prod)\"><b>X</b></i></td>\n            </tr>\n        </tbody>\n    </table>\n  </div>",
        styles: ["\ntable {\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntable, th, td {\n    border: 1px solid black;\n}\n  "],
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map