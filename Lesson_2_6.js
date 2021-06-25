"use strict";

function getNum() {
    let num = parseInt(prompt("Введите сумму депозита в рублях"));
    while (isNaN(num)) {
        num = parseInt(prompt("Вы ввели не верное число, введите сумму депозита"));
    }
    return num;
}

function getText(last, penult) {
    switch (penult) {
        case "1":
            return "Рублей"
        default:
            switch (last) {
                case "1":
                    return "Рубль";
                case "2":
                case "3":
                case "4":
                    return "Рубля";
                default:
                    return "Рублей";

            }
    }
}

let deposite = getNum();
let str = String(deposite);
let strLength = str.length;

let lastSymbol = str[strLength - 1];
let penultSymbol = str[strLength - 2];

let text = getText(lastSymbol, penultSymbol);
alert(`Вы ввели ${deposite} ${text}`);