function solve(word, text) {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if(regex.test(text)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
solve('javascript', 'JavaScript JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');

