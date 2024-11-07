function solve(firstChar, lastChar) {
    const charsInRange = (start, end) => {
        start = start.charCodeAt(0);
        end = end.charCodeAt(0);
        [start, end] = [Math.min(start, end), Math.max(start, end)];
        const chars = Array.from({length: end - start}, (_, i) => String.fromCharCode(start + i + 1)).join(' ').trim();
        // let result = '';
        // for(let i = start + 1; i < end; i++){
        //      result = result.concat(String.fromCharCode(i)).concat(' ');
        // }
        // console.log(result);
        console.log(chars);
    };
    charsInRange(firstChar, lastChar);
}
solve('a', 'e');