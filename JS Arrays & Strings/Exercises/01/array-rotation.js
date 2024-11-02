function solve(arr, numberOfRataion){
    for (let i = 0; i < numberOfRataion; i++){
        arr.push(arr.shift());
    }
    console.log(...arr);
}
solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);