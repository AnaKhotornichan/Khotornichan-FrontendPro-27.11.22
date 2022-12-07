/* Exercise 1 */

let primaryNumber = 20;
let alertMsg = "";
while (primaryNumber <= 30) {
    alertMsg = alertMsg + primaryNumber + " ";
    primaryNumber = primaryNumber + 0.5;
}
alert(alertMsg);


/* Exercise 2 */

let usd = 10;
const uahRate = 27;
let alertMsg= "";
while (usd <= 100) {
    alertMsg = alertMsg + (usd * uahRate) + " ";
    usd = usd + 10;
}
alert(alertMsg);


/* Exercise 3 */

let numberN = 50;
let alertMsg = "";
for (let i = 1; i <= 100; i++) {
    let square = i * i;
    if (square > numberN) break;
    alertMsg = alertMsg + i + " ";
}
alert(alertMsg);


/* Exercise 4 */

let num = 6;
let primeNumber = "This is a prime number!";
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        primeNumber = "This is not a prime number!";
        break;
    }
}
console.log(primeNumber);


/* Exercise 5 */

let num = 27;
let result = "You can't get this number by exponentiation of the number 3!";
for (let i = 2; i < num; i++) {
    if (Math.pow(3, i) === num) {
        result = "You can get this number by exponentiation of the number 3!";
        break;
    }
}
console.log(result);


