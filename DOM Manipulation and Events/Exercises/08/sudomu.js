document.addEventListener("DOMContentLoaded", solve);

function solve() {
    const solutionCheckForm = document.querySelector("#solutionCheck");

    solutionCheckForm.addEventListener("submit", checkSolution);

    function checkSolution(e) {
        e.preventDefault();

        const sumomuBoard = [...document.querySelectorAll("tr")].map((r) => {
            return [...r.querySelectorAll("input")].map((i) => i.value);
        });

        const solutionTable = document.querySelector("table");
        const checkEl = document.querySelector("#check");

        const checkResult = validityCheckStatus(sumomuBoard);

        checkEl.textContent = checkResult.status;
        solutionTable.style.border = checkResult.tableStyle;
    }

    function validityCheckStatus(sumomuBoard) {
        const checkStatus = {status: '', tableStyle: ''};
        if (isRowsValid(sumomuBoard) && isColsValid(sumomuBoard)) {
            checkStatus.status ="Success!", checkStatus.tableStyle =  "2px solid green";
        } else {
            checkStatus.status ="Keep trying ...", checkStatus.tableStyle =  "2px solid red";
        }
        return checkStatus;
    }

    function isRowsValid(sumomuBoard) {
        return sumomuBoard.filter(isDistinct).length == 3;
    }

    function isColsValid(sumomuBoard) {
        return (
            sumomuBoard
                .map((_, i) => [
                    sumomuBoard[1][i],
                    sumomuBoard[0][i],
                    sumomuBoard[2][i],
                ])
                .filter(isDistinct).length == 3
        );
    }

    function isDistinct(row) {
        return row.filter((n, i) => row.indexOf(n) === i).length == 3;
    }
}
