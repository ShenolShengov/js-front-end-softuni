function solve(array){
    let diff = 0;
    array.forEach(e => {
        if(e % 2 == 0) diff += e;
        else diff -= e;
    });
    console.log(diff);
}
solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);
