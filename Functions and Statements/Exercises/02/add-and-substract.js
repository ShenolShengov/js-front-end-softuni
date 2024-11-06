function solve(first, second, third) {
    const sum = (a, b) => a + b;
    const substract = (a, b) => a - b;
    console.log(substract(sum(first, second), third));
}
solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);
