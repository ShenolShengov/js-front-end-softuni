function solve(firstNum, secondNum) {
    const divide = (f, s) => (f / s).toFixed(2);
    console.log(divide(factorial(firstNum), factorial(secondNum)));
    function factorial(n) {
        let fac = 1;
        for(let i = 2; i <= n; i++){
            fac *= i;
        }
        return fac;
    }
}
solve(5, 2);
solve(6, 2);
