"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - ((this.price / 100) * 25);
    console.log(this.price);
}

let product1 = new Product("ananas", 100);
product1.make25PercentDiscount();

class Products {
    constructor(names, prices) {
        this.names = names;
        this.prices = prices;
    }

    make25PercentDiscount2() {
        this.prices = this.prices - ((this.prices / 100) * 25);
        console.log(this.prices);
    }
}

let product2 = new Products("banana", 100);
product2.make25PercentDiscount2();