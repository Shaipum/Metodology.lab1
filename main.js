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
