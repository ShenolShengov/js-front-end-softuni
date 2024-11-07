function solve(number) {
    const higherAvg = (n) => {
        if (digitsAvg(n) > 5) {
            return n;
        }
        n = append9(n);
        return higherAvg(n);
    };

    console.log(higherAvg(number));

    function digitsAvg(n) {
        return digitsSum(n) / n.toString().length;
    }


    function digitsSum(n) {
        return n.toString().split('')
            .map(Number)
            .reduce((acc, v) => acc + v);
    }

    function append9(n){
        return Number(n + '9');
    }
}
solve(101);
solve(5835);
