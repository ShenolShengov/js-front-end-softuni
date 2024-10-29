function solve(start, end){
    let sum = 0;
    let numers = '';
    for (let i = start; i <= end; i++) {
        numers = numers.concat(i, ' ');
        sum += i;
    }
    console.log(numers);
    console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0, 26);
solve(50, 60);