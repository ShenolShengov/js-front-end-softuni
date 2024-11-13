function solve(input) {
    const addressBook = input.reduce((acc, data) => {
        const [name, address] = data.split(":");
        acc[name] = address;
        return acc;
    }, {});
    Object.entries(addressBook)
        .sort(([nameA], [nameB]) => nameA.localeCompare(nameB))
        .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}
solve([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
]);
solve([
    "Bob:Huxley Rd",
    "John:Milwaukee Crossing",
    "Peter:Fordem Ave",
    "Bob:Redwing Ave",
    "George:Mesta Crossing",
    "Ted:Gateway Way",
    "Bill:Gateway Way",
    "John:Grover Rd",
    "Peter:Huxley Rd",
    "Jeff:Gateway Way",
    "Jeff:Huxley Rd",
]);
