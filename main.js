"use strict";

/*************************1*************************/
document.write("1. Вивести на сторінку в один рядок через кому числа від 10 до 20.<br>");
document.write("<br>");
let resArr = [];
for (let i = 10; i <= 20; i++) {
    resArr.push(i);
}
document.write(resArr.join(", "));
document.write("<br>");
document.write("<br>");
/*************************2*************************/
document.write("2. Вивести квадрати чисел від 10 до 20.<br>");
document.write("<br>");

let resArrSq = [];
for (let i = 10; i <= 20; i++) {
    resArrSq.push(i*i);
}
document.write(resArrSq.join(", "));
document.write("<br>");
document.write("<br>");
/*************************3*************************/

document.write("3. Вивести таблицю множення на 7.<br>");
document.write("<br>");
let a = 7;
let b ;
for(let i = 1; i <= 10; i++) {
    b = a * i;
    document.write(`${a} x ${i} = ${b}<br>`);
}
document.write("<br>");
document.write("<br>");
/*************************4*************************/

document.write("4. Знайти суму всіх цілих чисел від 1 до 15.<br>");
document.write("<br>");

let sum = 0;
for(let i = 1; i <= 15; i++) {
    sum += i;
}
document.write(sum);
document.write("<br>");
document.write("<br>");
/*************************5*************************/

document.write("5. Знайти суму всіх цілих чисел від 15 до 35.<br>");
document.write("<br>");
let prod = 15;
for(let i = 16; i <= 35; i++) {
    prod *= i;
}
document.write(prod);
document.write("<br>");
document.write("<br>");
/*************************6*************************/

document.write("6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.<br>");
document.write("<br>");

let sumAllNums = 0;
let n = 500;
for(let i = 1; i <= 500; i++) {
    sumAllNums += i;
}

let averageAr = sumAllNums / n;
document.write(averageAr);
document.write("<br>");
document.write("<br>");
/*************************7*************************/

document.write("7. Вивести суму лише парних чисел в діапазоні від 30 до 80.<br>");
document.write("<br>");

let sumEven = 0;
for(let i = 30; i <= 80; i++) {
    if(i % 2 === 0) {
        sumEven += i;
    }
}

document.write(sumEven);
document.write("<br>");
document.write("<br>");
/*************************8*************************/

document.write("8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.<br>");
document.write("<br>");

let arrDivByThree = [];
for(let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        arrDivByThree.push(i);
    }
}
document.write(arrDivByThree.join(", "));
document.write("<br>");
document.write("<br>");
/*************************9*************************/

document.write("9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.<br>");
document.write("<br>");

let natNum = 10;
let dividersArr = [];
for(let i = 1; i <= natNum; i++) {
    if(natNum % i === 0) {
        dividersArr.push(i);
    }
}
document.write(dividersArr.join(", "));
document.write("<br>");
document.write("<br>");
/*************************10*************************/

document.write("10. Визначити кількість його парних дільників.<br>");
document.write("<br>");

let dividersArrEven = [];
for(let i = 1; i <= natNum; i++) {
    if(natNum % i === 0 && i % 2 === 0) {
        dividersArrEven.push(i);
    }
}
let arrLength = dividersArrEven.length;
document.write(arrLength);
document.write("<br>");
document.write("<br>");
/*************************11*************************/

document.write("11. Знайти суму його парних дільників.<br>");
document.write("<br>");

dividersArrEven
let sumDividersArrayEven = 0;
for(let i = 0; i <= dividersArrEven.length; i++) {
    sumDividersArrayEven += i;
}
document.write(sumDividersArrayEven);
document.write("<br>");
document.write("<br>");

/*************************12*************************/

document.write("12. Надрукувати повну таблицю множення від 1 до 10.<br>");
document.write("<br>");

let mul_first;
for(let i = 1; i <= 10; i++) {
    for(let j = 1; j<= 10; j++) {
        mul_first = i * j;
        document.write(`${i} x ${j} = ${mul_first}<br>`);
    }
}
document.write("<br>");
document.write("<br>");

/*************************13*************************/

document.write("13. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).<br>");
document.write("<br>");

let resArrStep = [];
for(let i = 20; i <= 30; i += 0.5) {
    resArrStep.push(i);
}

document.write(resArrStep.join(", "));
document.write("<br>");
document.write("<br>");

/*************************14*************************/
document.write("14. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.<br>");
document.write("<br>");

let inHr;
let priceDolInHr = 27;
for(let i = 10; i <= 100; i +=10) {
    inHr = i * priceDolInHr;
    document.write(`${i} USD = ${inHr} UAH<br>`)
}

document.write("<br>");
document.write("<br>");

/*************************15*************************/
document.write("15. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.<br>");
document.write("<br>");

let N = 200;
let arrSqN = [];
for(let i = 1; i <= 100; i++) {
    if(i * i <= N) {
        arrSqN.push(i * i);
    }
}
document.write(arrSqN.join(", "));
document.write("<br>");
document.write("<br>");

/*************************16*************************/
document.write("16. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).<br>");
document.write("<br>");

function isPrime(num) {
    for (let i = 2; i <= num - 1; i++) {
        if (num != 1 && num % i !== 0) {
            return true;
        } else {
            return false;
        }
    }
}
document.write(isPrime(8));
document.write("<br>");
document.write("<br>");

/*************************17*************************/

document.write("17. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).<br>");
document.write("<br>");

function isDevidableThroughThree(div) {
    if(div % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

document.write(isDevidableThroughThree(7));
document.write("<br>");
document.write("<br>");

