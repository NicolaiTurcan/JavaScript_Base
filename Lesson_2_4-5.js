"use strict";

function sum(a, b) {
    return a + b;
}

function differ(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function getNum() {
    let num = parseInt(prompt("Введите число"));
    while (isNaN(num)) {
        num = parseInt(prompt("Вы ввели не число, введите любое ЧИСЛО"));
    }
    return num;
}
function getOperation() {
    let operation = prompt("Введите операцию сложение - sum, вычитание - differ, умножение - mult или диление - division").toLowerCase();
    while (operation !== "sum" && operation !== "differ" && operation !== "mult" && operation !== "division") {
        operation = prompt("Неверный ввод, попробуйте еще раз: sum, differ, mult или division");
    }
    return operation;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return sum(arg1, arg2);
        case "differ":
            return differ(arg1, arg2);
        case "mult":
            return mult(arg1, arg2);
        case "division":
            return division(arg1, arg2);
        default:
            alert("Введите одну из операций: sum, differ, mult или division");

    }
}

alert("Введите 2 числа и операцию")
let num1 = getNum();
let num2 = getNum();
let operation = getOperation();
let result = mathOperation(num1, num2, operation);
alert(`Результат операции = ${result}`);

