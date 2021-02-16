var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number"));
const operator = prompt("Enter any of these mathematical operation +,-,*,/");

var result = 0;
switch (operator) {
    case "+":
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case "-":
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`); 
        break;
    case "*":
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`); 
        break;  
    case "/":
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`); 
        break; 
    default:
        console.log("Not a valid operator");          
};

