function solve(arraysData) {
    const uniqueArrays = [];

    arraysData.forEach((arrData) => {
        const arr = JSON.parse(arrData).sort((f, s) => (f <= s ? -1 : 1));
        const arrJson = JSON.stringify(arr);
        if (uniqueArrays.includes(arrJson)) return;
        uniqueArrays.push(arrJson);
    });

    uniqueArrays
        .map((arr) => JSON.parse(arr))
        .sort((f, s) =>
            f.length < s.length ? -1 : f.length == s.length ? 0 : 1
        )
        .forEach((arr) => {
            const sortedArr = arr.sort((f, s) => (f <= s ? 1 : -1));
            console.log(`[${sortedArr.join(", ")}]`);
        });
}
solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
solve([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]",
]);
