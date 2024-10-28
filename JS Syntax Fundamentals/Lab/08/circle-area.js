function solve(radius){
    if (typeof radius !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    } else {
        const area = (Math.PI * (radius ** 2)).toFixed(2);
        console.log(area);
    }
}
solve(5);
solve('name');