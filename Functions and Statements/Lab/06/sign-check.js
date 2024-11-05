function solve(first, second, third) {
    const minusCount = calculateMinusCount(first, second, third);
    if(minusCount % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

    function calculateMinusCount(...numbers) {
        const isNegative = (n) =>  n < 0;
        return numbers.filter(isNegative).length;
    }
}
solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
solve(-5, 1, 1);
