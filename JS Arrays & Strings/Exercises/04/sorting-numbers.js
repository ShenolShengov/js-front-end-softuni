function solve(arr) {
    arr.sort((a, b) => a <= b ? -1 : a == b ? 0 : 1);
    const result = [];
    const lastIndex = arr.length - 1;
    for(let i = 0; i < Math.ceil(arr.length / 2); i++){
        result.push(arr[i]);
        if(i !== lastIndex - i) {
            result.push(arr[lastIndex - i]);
        }
    }
    return result;
}
console.log(solve([65,3, 52, 48, 63, 31, -3, 18, 56]));


// function solve(arr) {
//     arr.sort((a, b) => a <= b ? -1 : a == b ? 0 : 1);
//     const result = [];
//     for(let i = 0; i < Math.floor(arr.length / 2); i++){
//         result.push(arr[i]);
//         result.push(arr[arr.length - 1 - i]);
//     }
//     if(arr.length % 2 !== 0) result.push(arr[Math.floor(arr.length / 2)]);
//     return result;
// }
