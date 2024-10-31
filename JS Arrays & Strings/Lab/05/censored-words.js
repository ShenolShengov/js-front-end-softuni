function solve(input, censoredWord){
   console.log(input.replaceAll(censoredWord, '*'.repeat(censoredWord.length)));
}
solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');

