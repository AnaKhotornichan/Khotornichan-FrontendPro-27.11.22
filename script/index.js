const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const minNumber = Math.min(...arr);
console.log(minNumber);
const indexMin = arr.indexOf(minNumber);
console.log(indexMin);

const maxNumber = Math.max(...arr);
console.log(maxNumber);
const indexMax = arr.indexOf(maxNumber);
console.log(indexMax);

const negativeNumbers = arr.filter(number => number < 0);
console.log(negativeNumbers.length);

const odds = [];
arr.forEach((number) => {
  if (number % 2 !== 0 && number > 0) {
    odds.push(number);
  }
});
console.log(odds.length);

const even = [];
arr.forEach((number) => {
  if (number % 2 === 0 && number > 0) {
    even.push(number);
  }
});
console.log(even.length);

let sumEven = 0;
for (let i = 0; i < even.length; i++) {
    sumEven += even[i];
  }
console.log(sumEven);

let sumOdds = 0;
for (let i = 0; i < odds.length; i++) {
    sumOdds += odds[i];
  }
console.log(sumOdds);

let multEven = 1;
for (let i = 0; i < even.length; i++) {
    multEven *= even[i];
  }
console.log(multEven);

const resetArr = arr.map((number, i) => indexMax !== i ? 0 : number);
console.log(resetArr);