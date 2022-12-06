/* Exercise 1 */
const digitOne = prompt("Enter first number");
const digitTwo = prompt("Enter second number");

if (+digitOne > +digitTwo) {
    alert ("First number is grater than the second");
} else {
    alert ("Second number is greater than first")
}


/* Exercise 2 */
const km = prompt("Please, enter lenght in kilometers")
const ft = prompt("Please, enter length in feet")

const ftLength = parseInt(ft) / 3280.84;

if (+km < ftLength) {
    alert ("Lenght in kilometers is lesser than in feet");
} else {
    alert ("Lenght in feet is lesser than in kilometers")
}


/* Exercise 3 */
const numberA = prompt("Enter number A");
const numberB = prompt("Enter number B");

if (+numberA % +numberB === 0) {
    alert ("Number A can be diveded by number B");
} else {
    alert ("Number A can't be diveded by number B");
}


/* Exercise 4 */
let num = 10;
while (num < 21) {
    const comma = num === 20 ? '' : ','; 
    document.write(num + comma);
    num++;
}


/* Exercise 5 */
let num = 10;
while (num <= 20) {
    const comma = num === 20 ? '' : ','; 
    document.write(Math.pow(num, 2) + comma);
    num++;
}


/* Exercise 6 */
for (let num = 1; num <=10; num++) {
    const comma = num === 10 ? '' : ', ';
    document.write(num + " * 7" + " = " + (num * 7) + comma);
}


/* Exercise 7 */
let num = 1;
let result = 0;
while (num <= 500) {
    result += num;
    num++;
}
alert(result/500);


/* Exercise 8 */
let num = 15;
let product = 1;
while (num <=35) {
    product = product * num;
    num++;
}
alert(product);


/* Exercise 9 */
let sum = 0;
for (let num = 30; num <=80; num = num + 2) {
    sum = sum + num;
}
alert(sum);


/* Exercise 10 */
let mult = "";
for (let num = 100; num <=200; num++) {
    const comma = num === 198 ? '' : ',';
    if (num % 3 === 0) {
        mult = mult + num + comma;
    }
}
alert(mult);