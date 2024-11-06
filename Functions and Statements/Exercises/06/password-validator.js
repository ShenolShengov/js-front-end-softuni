function solve(numbers) {
    const isPalindrome = n => n == n.toString().split('').reverse().join('');
    numbers.forEach(e => console.log(isPalindrome(e)));
}
solve([123,323,421,121]);
solve([32,2,232,1010]);
