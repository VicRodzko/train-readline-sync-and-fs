var rs = require('readline-sync');
var fs = require('fs');

var firstNumber = rs.question("First Number? ");
var secondNumber = rs.question("Second Number? ");
var opSimbol = rs.question("Operation Simbol? ");
var result;


switch (opSimbol) {
	case "+": console.log(result = +firstNumber + +secondNumber); break;
	case "-": console.log(result = firstNumber - secondNumber); break;
	case "*": console.log(result = firstNumber * secondNumber); break;
	case "/": console.log(result = firstNumber / secondNumber); break;
	default: console.log("I don't now this operation simbol!");
}

var answer = `Your expression : ${firstNumber}${opSimbol}${secondNumber} = ${result}`;
console.log(answer);

fs.appendFile("content.txt", answer + "\n", function(){
	console.log("Saved in content.txt!")
});