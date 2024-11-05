function solve(first, second, operator) {
    const operation = getOperation(operator);

    console.log(operation(first, second));

    function getOperation(operation) {
        switch (operation) {
            case "add":
                return (f, s) => f + s;
            case "subtract":
                return (f, s) => f - s;
            case "multiply":
                return (f, s) => f * s;
            case "divide":
                return (f, s) => f / s;
        }
    }
}

solve(5, 5, "multiply");
solve(40, 8, "divide");
solve(12, 19, "add");
solve(50, 13, "subtract");
