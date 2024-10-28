function solve(num){
    const monts = ['January', 'February', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (num < 1 || num > monts.length) {
        console.log('Error!');
    } else {
        console.log(monts[num - 1]);
    }
}
solve(2);
solve(13);