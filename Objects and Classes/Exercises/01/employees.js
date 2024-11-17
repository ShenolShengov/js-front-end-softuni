function solve(input) {
    input.map(toPerson).forEach((e) => console.log(e.toString()));

    function toPerson(name) {
        const personalNumber = name.length;
        return {
            name,
            personalNumber,
            toString: () =>
                `Name: ${name} -- Personal Number: ${personalNumber}`,
        };
    }
}
solve([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
solve(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
