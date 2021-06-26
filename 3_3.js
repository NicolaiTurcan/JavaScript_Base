"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.price = (product.price / 100) * 85;
});

// Выводим новые цены
products.forEach(product => console.log(product.price));

