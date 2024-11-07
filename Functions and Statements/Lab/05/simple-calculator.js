function solve(first, second, operator) {
    const operations = [];
    operations['multiply'] = (a, b) => a * b;
    operations['divide'] = (a, b) => a / b;
    operations['add'] = (a, b) => a + b;
    operations['subtract'] = (a, b) => a - b;
    console.log(operations[operator](first, second));
}

solve(5, 5, "multiply");
solve(40, 8, "divide");
solve(12, 19, "add");
solve(50, 13, "subtract");
