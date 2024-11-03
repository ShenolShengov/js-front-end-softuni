function solve(words, template) {
    words = words.split(", ");
    for (const word of words) {
        template = template.replace("*".repeat(word.length), word);
    }
    console.log(template);
}
solve("great", "softuni is ***** place for learning new programming languages");
solve('great, learning', 'softuni is ***** place for ******** new programming languages');