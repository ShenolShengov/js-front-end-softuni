function solve(input) {
    const evendAddOddSumOfDigits = num =>  num.toString().split('')
        .map(e => Number(e))
        .reduce((acc, e) => {
           if(e % 2 == 0) acc.even = acc.even + e;
           else acc.odd = acc.odd + e;
           return acc;
        }, {
            "even": 0,
            "odd": 0
        });
    const sums = evendAddOddSumOfDigits(input);
    console.log(`Odd sum = ${sums.odd}, Even sum = ${sums.even}`);
}
solve(1000435);
solve(3495892137259234);