"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var cart_item_1 = require("./cart-item");
var core_1 = require("@angular/core");
var CartService = (function () {
    function CartService() {
        this.cartProducts = [];
        this.event = new core_1.EventEmitter();
    }
    CartService.prototype.addProduct = function (prod) {
        var exists = false;
        var index = -1;
        this.cartProducts.forEach(function (e, i) {
            if (e.prod === prod) {
                exists = true;
                index = i;
            }
        });
        if (!exists && index === -1) {
            var newProd = new cart_item_1.CartItem(prod, 1);
            this.cartProducts.push(newProd);
        }
        else {
            this.cartProducts[index].qty += 1;
            this.updateItemTotalPrice(index);
        }
        this.event.emit(this.getList());
    };
    CartService.prototype.requestEvent = function () {
        return this.event;
    };
    CartService.prototype.updateItemTotalPrice = function (index) {
        this.cartProducts[index].totalPrice = this.cartProducts[index].qty * this.cartProducts[index].prod.price;
    };
    CartService.prototype.removeProduct = function (prod) {
        var exists = false;
        var index = -1;
        this.cartProducts.forEach(function (e, i) {
            if (e.prod === prod) {
                exists = true;
                index = i;
            }
        });
        if (exists && index > -1) {
            this.cartProducts[index].qty -= 1;
            this.updateItemTotalPrice(index);
        }
        this.event.emit(this.getList());
    };
    CartService.prototype.getList = function () {
        return this.cartProducts.filter(function (p) { return p.qty > 0; });
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable()
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map