const arrLength = +prompt("Please, enter an array lenght!");
const arr = [];

for (let i = 1; i <= arrLength; i++) {
    let arrEl = +prompt("Please, enter a number!");
    arr.push(arrEl);
    console.log(arr);
}

const arrSorted = arr.sort((firstEl, secondEl) => {
    if (firstEl > secondEl) {
        return 1;
    } else if (firstEl < secondEl) {
        return -1;
    }
    return 0;
});

console.log(arrSorted);

arrSorted.splice(1,3);
console.log (arrSorted);
