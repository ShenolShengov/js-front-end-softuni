function solve(points) {
    const [x1, y1, x2, y2] = points;

    printPointsDistanceValidity(x1, y1, 0, 0);
    printPointsDistanceValidity(x2, y2, 0, 0);
    printPointsDistanceValidity(x1, y1, x2, y2);

    function pointDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function distanceValidityStatus(distance) {
        return Number.isInteger(distance) ? "valid" : "invalid";
    }

    function printPointsDistanceValidity(x1, y1, x2, y2) {
        const distance = pointDistance(x1, y1, x2, y2);
        console.log(
            `{${x1}, ${y1}} to {${x2}, ${y2}} is ${distanceValidityStatus(
                distance
            )}`
        );
    }
}
solve([3, 0, 0, 4]);
// solve([2, 1, 1, 1]);
