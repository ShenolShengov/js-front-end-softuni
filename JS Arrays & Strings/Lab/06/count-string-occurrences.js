function solve(input, word) {
    const count = input.split(" ").filter((e) => e === word).length;
    console.log(count);
}
solve("This is a word and it also is a sentence", "is");
solve("softuni is great place for learning new programming languages", " softuni");
