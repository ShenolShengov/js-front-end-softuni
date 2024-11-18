function solve(input) {
    const [sentense, ...words] = input;
    const sentenseWords = sentense.split(' ');
    const wordsByConut = sentenseWords.reduce((acc, w) => {
        acc[w] = 0;
        return acc;
    }, {});
    words.forEach(w => {
        if(wordsByConut[w] >= 0){
            wordsByConut[w] = wordsByConut[w] + 1;
        }
    });
    const sortedWords = Object.entries(wordsByConut).sort(([w1, c1], [w2, c2]) => c1 < c2 ? 1 : c1 == c2 ? 0 : -1);
    for(const [word, count] of sortedWords){
        console.log(`${word} - ${count}`);
    }
}
solve(['this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
