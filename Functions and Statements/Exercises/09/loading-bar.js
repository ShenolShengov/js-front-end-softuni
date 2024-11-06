function solve(percentage) {
    const loadingBar = (p => `[${'%'.repeat(p / 10)}${'.'.repeat(10 - (p / 10))}]`)(percentage);
    const loadingStatus = (p => p == 100 ? 'Complete!' : 'Still loading...')(percentage);
    let result = `${percentage}% `;
    if(percentage == 100){
        result = result.concat(`${loadingStatus}\n${loadingBar}`);
    } else {
        result = result.concat(`${loadingBar}\n${loadingStatus}`);
    }
    console.log(result);
}
solve(30);
solve(50);
solve(100);
