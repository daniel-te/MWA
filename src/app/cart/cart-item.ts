import { Product } from './../product';

export class CartItem {
    public qty: number;
    public prod: Product;
    public totalPrice: number;
    constructor(prod: Product, qty: number, totalPrice?: number) {
        this.qty = qty;
        this.prod = prod;
        this.totalPrice = totalPrice ? totalPrice : (prod.price * this.qty);
    }
}