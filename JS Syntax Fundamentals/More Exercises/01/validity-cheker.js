function solve(x1, y1, x2, y2) {
    console.log(
        `{${x1}, ${y1}} to {0, 0} is ${
            isValidDistance(pointDistenceFromCenter(x1, y1))
                ? "valid"
                : "invalid"
        }`
    );
    console.log(
        `{${x2}, ${y2}} to {0, 0} is ${
            isValidDistance(pointDistenceFromCenter(x2, y2))
                ? "valid"
                : "invalid"
        }`
    );
    console.log(
        `{${x1}, ${y1}} to {${x2}, ${y2}} is ${
            isValidDistance(pointsDistance(x1, y1, x2, y2))
                ? "valid"
                : "invalid"
        }`
    );

    function pointsDistance(a1, b1, a2, b2) {
        return Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
    }

    function pointDistenceFromCenter(a1, b1) {
        return pointsDistance(a1, b1, 0, 0);
    }

    function isValidDistance(distance) {
        return Number.isInteger(distance);
    }
}
solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
