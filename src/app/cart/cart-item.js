"use strict";
var CartItem = (function () {
    function CartItem(prod, qty, totalPrice) {
        this.qty = qty;
        this.prod = prod;
        this.totalPrice = totalPrice ? totalPrice : (prod.price * this.qty);
    }
    return CartItem;
}());
exports.CartItem = CartItem;
//# sourceMappingURL=cart-item.js.map