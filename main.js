const readLineSync = require('readline-sync');
const { readFileSync, existsSync } = require('fs');

let result = [];

//eqation conculating
const EquationConc = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    const discriminantSqrt = Math.sqrt(discriminant)

    console.log(`Your equation: (${a}) x^2 + (${b}) x + (${c}) = 0`);

    if (discriminant > 0) {
        const x1 = (-b + discriminantSqrt) / (2 * a);
        const x2 = (-b - discriminantSqrt) / (2 * a);
        result = [x1, x2]
    } else if (discriminant == 0) {
        const x1 = (-b + discriminantSqrt) / (2 * a);
        result = [x1]
    } else {
        result = []
    }
    answerShow(result);
}

//showing the result
const answerShow = (arr) => {
    const numRoots = arr.length;

    console.log(`There are ${numRoots} roots`);

    if (numRoots === 2) {
        console.log(`x1 = ${arr[0]}`);
        console.log(`x2 = ${arr[1]}`);
    } else if (numRoots === 1) {
        console.log(`x1 = ${arr[0]}`);
    } else {
        return;
    }
}

//input values function
const askUser = (questionPrompt) => {
    let input = readLineSync.question(questionPrompt);

    while (isNaN(input)) {
        console.log('Error. Expected a valid real number, got invalid instead');
        input = readLineSync.question(questionPrompt);
    }

    if (questionPrompt === 'a = ' && input === '0') {
        console.log('Error. a cannot be 0');
        input = askUser(questionPrompt);
    }

    return input;
} 
