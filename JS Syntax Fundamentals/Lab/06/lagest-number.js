function solve(a, b, c){
    let largestNumber = Math.max(a, Math.max(b, c));
    console.log(`The largest number is ${largestNumber}.`);
}
solve(5, -3, 16);
solve(-3, -5, -22.5);