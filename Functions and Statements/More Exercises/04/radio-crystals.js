function solve(input) {
    const [target, ...crystals] = input;
    const operations = getOperations();
    const washing = c => Math.floor(c);

    crystals.forEach((crystal) => {
        console.log(`Processing chunk ${crystal} microns`);
        Object.keys(operations).some((opName) => {
            if (crystal == target) return true;

            const currentOp = operations[opName];
            if (opName == "X-ray") {
                crystal = currentOp(crystal);
                printOperationCount(opName, 1);
                return;
            }
            [crystal, isOperationPerform] = applyOperations(crystal, opName, currentOp);
            if(isOperationPerform) {
                crystal = washing(crystal);
                console.log('Transporting and washing');
            }
        });
        console.log(`Finished crystal ${crystal} microns`);
    });

    function applyOperations(crystal, operationName, operation) {
        let count = 0;
        while (operation(crystal) >= target - 1) {
            count++;
            crystal = operation(crystal);
        }
        if (count) printOperationCount(operationName, count);
        return [crystal, count];
    }

    function printOperationCount(operationName, count) {
        console.log(`${operationName} x${count}`);
    }

    function getOperations() {
        const operations = [];
        operations["Cut"] = (c) => c / 4;
        operations["Lap"] = (c) => c * 0.8;
        operations["Grind"] = (c) => c - 20;
        operations["Etch"] = (c) => c - 2;
        operations["X-ray"] = (c) => c + 1;
        return operations;
    }
}

solve([1375, 50000]);
solve([980, 4000]);
