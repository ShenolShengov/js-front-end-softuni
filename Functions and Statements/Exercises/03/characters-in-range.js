function solve(firstChar, lastChar) {
    const charsInRange = (start, end) => {

        [start, end] = [start < end ? start : end, end > start ? end : start];
        let result = '';
        for(let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++){
             result = result.concat(String.fromCharCode(i)).concat(' ');
        }
        console.log(result);
    };
    charsInRange(firstChar, lastChar);
}
solve('a', 'e');