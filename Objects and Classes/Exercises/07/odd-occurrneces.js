function solve(sentence) {
    const wordsCount = sentence
        .toLowerCase()
        .split(/\s+/)
        .reduce((wordsCount, word) => {
            wordsCount[word] = (wordsCount[word] || 0) + 1;
            return wordsCount;
        }, {});

    const oddOccurrences = Object.entries(wordsCount)
        .filter(([_, count]) => count % 2 != 0)
        .map(([word, _]) => word);

    console.log(oddOccurrences.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");
