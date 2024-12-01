document.addEventListener("DOMContentLoaded", solve);

function solve() {
    const sudomuCheckForm = document.querySelector("#solutionCheck");
    sudomuCheckForm.addEventListener("submit", checkSudomu);
    sudomuCheckForm.addEventListener("reset", clearSudomuStatus);

    const sudomuSizeEl = document.querySelector("#size");
    sudomuSizeEl.addEventListener("change", updateSudomu);

    const fillSudomuForm = document.querySelector(".fill-sudomu");
    fillSudomuForm.addEventListener("submit", fillSudomu);
    // for judge withouts this two lines

    function fillSudomu(e) {
        e.preventDefault();
        const size = +document.querySelector("#size").value;
        const validSudomu = generateValidSudomu(size);
        const sudomuCellsInputs = document.querySelectorAll('table tr td input');
        sudomuCellsInputs.forEach((el, i) => {
            el.value = validSudomu[i];
        });
    }

    function generateValidSudomu(size) {
        return size == 3 ? 
        [
            1, 2, 3,
            2, 3, 1, 
            3, 1, 2
        ] :
        [
            5, 3, 8, 2, 4, 9, 7, 6, 1,
            9, 2, 4, 7, 1, 6, 3, 5, 8,
            6, 7, 1, 3, 8, 5, 2, 9, 4,
            3, 4, 5, 1, 9, 2, 8, 7, 6, 
            2, 1, 9, 8, 6, 7, 4, 3, 5, 
            7, 8, 6, 4, 5, 3, 1, 2, 9,
            1, 6, 2, 5, 7, 8, 9, 4, 3, 
            4, 9, 3, 6, 2, 1, 5, 8, 7,
            8, 5, 7, 9, 3, 4, 6, 1, 2,
        ];
    }

    function checkSudomu(e) {
        e.preventDefault();

        const sudomu = [...document.querySelectorAll("td input")].map(
            (e) => +e.value
        );
        const size = +document.querySelector("#size").value;
        const isValidSudomu = validateSudomu(sudomu, size);
        const sudomuStatus = getSudomuStatus(isValidSudomu);

        const solutionTable = document.querySelector("table");
        const checkEl = document.querySelector("#check");

        checkEl.textContent = sudomuStatus.validationMessage;
        solutionTable.style.border = sudomuStatus.borderStyle;
    }

    function updateSudomu(e) {
        const size = +e.target.value;
        console.log(size);
        const generatedSudomu = generateSudomu(size);

        const currentSudomu = document.querySelector("#solutionCheck table");

        currentSudomu.replaceWith(generatedSudomu);
    }

    function generateSudomu(size) {
        const sudomu = document.createElement("table");
        const row = generateSudomuRow(size);
        for (let i = 0; i < size; i++) {
            sudomu.appendChild(row.cloneNode(true));
        }
        return sudomu;
    }

    function generateSudomuRow(size) {
        const row = document.createElement("tr");
        const cell = generateSudomuCell(size);
        for (let i = 0; i < size; i++) {
            row.appendChild(cell.cloneNode(true));
        }
        return row;
    }

    function generateSudomuCell(size) {
        const cell = document.createElement("td");
        const cellInput = generateCellInput(size);
        cell.appendChild(cellInput);
        return cell;
    }

    function generateCellInput(size) {
        const input = document.createElement("input");
        (input.type = "number"), (input.required = true);
        (input.step = 1), (input.min = 1), (input.max = size);
        return input;
    }

    function clearSudomuStatus() {
        const solutionTable = document.querySelector("table");
        const checkEl = document.querySelector("#check");
        solutionTable.style.border = "";
        checkEl.textContent = "";
    }

    function getSudomuStatus(isValid) {
        return {
            validationMessage: getValidationMessage(isValid),
            borderStyle: getBorderStyle(isValid),
        };
    }

    function getValidationMessage(isValid) {
        return isValid ? "Success!" : "Keep trying ...";
    }

    function getBorderStyle(isValid) {
        return `2px solid ${isValid ? "green" : "red"}`;
    }

    function validateSudomu(sudomu, size) {
        const rows = extractRows(sudomu, size);
        const columns = extractColumns(rows, size);

        const isValid =
            numbersInRange(sudomu, 1, size) &&
            hasUniqueRows(rows) &&
            hasUniqueRows(columns);
        return size == 9
            ? isValid && hasUniqueRows(extractSquares(sudomu))
            : isValid;
    }

    function numbersInRange(numbers, lower, greater) {
        return numbers.every((e) => e >= lower && e <= greater);
    }

    function hasUniqueRows(matrix) {
        return matrix.every(distinctElements);
    }

    function distinctElements(elements) {
        return elements.every((el, index, arr) => arr.indexOf(el) == index);
    }

    function extractColumns(rows, size) {
        const cols = [];
        for (let colindex = 0; colindex < size; colindex++) {
            const currentCol = [];
            for (let rowIndex = 0; rowIndex < size; rowIndex++) {
                currentCol.push(rows[rowIndex][colindex]);
            }
            cols.push(currentCol);
        }
        return cols;
    }

    function extractRows(numbers, size) {
        return Array.from({ length: size }, (_, i) => i * size).reduce(
            (rows, index) => {
                rows.push(numbers.slice(index, index + size));
                return rows;
            },
            []
        );
    }

    function extractSquares(numbers) {
        const squares = [];

        let index = 0;
        while (squares.length != 9) {
            squares.push(extractSquare(numbers, index));

            index += 3;
            if (index % 9 == 0) {
                index += 18;
            }
        }
        return squares;
    }

    function extractSquare(numbers, index) {
        return [
            ...extractFirstThree(numbers, index),
            ...extractFirstThree(numbers, index + 9),
            ...extractFirstThree(numbers, index + 18),
        ];
    }

    function extractFirstThree(numbers, index) {
        return numbers.slice(index, index + 3);
    }
}
