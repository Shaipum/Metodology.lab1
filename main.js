const readLineSync = require('readline-sync');
const { readFileSync, existsSync } = require('fs');

let result = [];

//eqation conculating
const EquationConc = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    const discriminantSqrt = Math.sqrt(discriminant)

    console.log(`Your equation: ${a}*x^2 + ${b}*x + ${c} = 0`);

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

//interactive mode
const startInteractiveMode = () => {
    const questions = ['a = ', 'b = ', 'c = '];
    const answers = questions.map(element => askUser(element));

    return EquationConc(...answers);
}

//non-interactive mode
 const startNonInteractiveMode = () => {
    const filePath = process.argv[2];
    const fileExists = existsSync(filePath);

    if (!fileExists) {
        console.log(`file ${filePath} does not exist`);
        process.exit(1);
    }

    const text = readFileSync(filePath, 'utf8');
    const argArray = text.split(' ').map(element => Number(element));
    
    if (argArray.length !== 3) {
        console.log('invalid file format');
        process.exit(1);
    }

    if (argArray[0] === 0) {
        console.log('Error. a cannot be 0');
        process.exit(1);
    }

    return EquationConc(...argArray);
}

//main starter condition
if (process.argv.length === 2) {
    startInteractiveMode();
} else if (process.argv.length === 3) {
    startNonInteractiveMode();
}