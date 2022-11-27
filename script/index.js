const firstNumber = prompt("Please, enter a number!");
const secondNumber = prompt("Please, enter a number!");
const sum = parseInt(firstNumber) + parseInt(secondNumber);
const sub = parseInt(firstNumber) - parseInt(secondNumber);
const mul = parseInt(firstNumber) * parseInt(secondNumber);
const div = parseInt(firstNumber) / parseInt(secondNumber);
const alertMsg = firstNumber + '+' + secondNumber + '=' + sum + '\n' +
firstNumber + '-' + secondNumber + "=" + sub + '\n' + 
firstNumber + '*' + secondNumber + "=" + mul + '\n' +
firstNumber + "/" + secondNumber + "=" + div; 
alert (alertMsg);