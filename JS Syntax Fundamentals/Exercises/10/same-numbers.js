function solve(num) {
    let sameNumbers = true;
    let sum = 0;
    let lastNum;
    while(num != 0) {
        let currentNum = num % 10;
        sum += currentNum;
        num = Math.floor(num / 10);
        if(lastNum) {
            sameNumbers = lastNum === currentNum;
        } else {
            lastNum = currentNum;
        }
    }
    console.log(sameNumbers);
    console.log(sum);
}
solve(2222222);
solve(1234);