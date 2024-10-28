function solve(a, b, operation){
    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;
        default:
            console.log('Invalid operation');
            break;
    }
    if (result) {
        console.log(result);
    }
}
solve(5, 6, '+');
solve(3, 5.5, '*');