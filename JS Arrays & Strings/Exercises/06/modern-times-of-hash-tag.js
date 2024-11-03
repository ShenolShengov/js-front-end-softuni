function solve(input) {
    const regex = /(?<=#)[a-zA-Z]+/g;
    console.log(input.match(regex).join('\n'));
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
