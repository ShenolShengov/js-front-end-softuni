function solve(input) {
    const phoneBook = {};
    input
        .map(contact => contact.split(' '))
        .forEach(([name, phone]) => phoneBook[name] = phone);
    for(const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
solve([
    "Tim 0834212554",
    "Peter 0877547887",
    "Bill 0896543112",
    "Tim 0876566344",
]);
solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);