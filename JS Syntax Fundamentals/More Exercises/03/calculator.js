function solve(leftNumber, operator, rightNumber){
    console.log(eval('leftNumber' + operator + 'rightNumber').toFixed(2));
}
solve(2, '+', 3);