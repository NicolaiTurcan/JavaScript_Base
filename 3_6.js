"use strict";

/* Первый очевидный вариант :)

console.log("x");
console.log("xx");
console.log("xxx");
console.log("xxxx");
console.log("xxxxx");
console.log("xxxxxx");
console.log("xxxxxxx");
console.log("xxxxxxxx");
console.log("xxxxxxxxx");
console.log("xxxxxxxxxx");
console.log("xxxxxxxxxxx");
console.log("xxxxxxxxxxxx");
console.log("xxxxxxxxxxxxx");
console.log("xxxxxxxxxxxxxx");
console.log("xxxxxxxxxxxxxxx");
console.log("xxxxxxxxxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxxxxxxxxxxxxxxx"); 
*/

/**
 * Возвращает строку из counter X-ов
 * @param {number} counter 
 * @returns {string}
 */
function getRow(counter) {
    let array = [];
    for (let j = 0; j < counter; j++) {
        array.push("x");
    }
    return array.join("");
}

/**
 * Отрисовывает горку с высотой rowCount в Консоли
 * @param {number} rowCount высота горки)
 */
function drawHill(rowCount) {
    for (let i = 1; i <= rowCount; i++) {
        let result = getRow(i);
        console.log(result);
    }
}

drawHill(20);
