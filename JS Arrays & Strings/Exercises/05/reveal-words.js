function solve(words, template) {
    words.split(", ")
        .forEach(w => template = template.replace('*'.repeat(w.length), w));
    console.log(template);
}
solve("great", "softuni is ***** place for learning new programming languages");
solve('great, learning', 'softuni is ***** place for ******** new programming languages');