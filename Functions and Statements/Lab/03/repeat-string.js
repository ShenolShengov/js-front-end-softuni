function solve(input, count) {
    return repeatStr(input, count);

    function repeatStr(stirng, countOfRepeat) {
        return stirng.repeat(countOfRepeat);
    }
}
console.log(solve("abc", 3));
console.log(solve("String", 2));