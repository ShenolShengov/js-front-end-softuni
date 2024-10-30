function solve(input) {
    const regex = /[\.,\s!?'\-]/;
    const words = input
        .split(regex)
        .filter((w) => w || w == '0')
        .map((w) => w.toUpperCase())
        .join(", ");
    console.log(words);
}
solve("Hi, how are you?");
solve('Hello');
