function solve() {
    document.querySelector("#searchBtn").addEventListener("click", onClick);

    function onClick() {
        resetSelectStyles();
        const tableData = document.querySelectorAll("tbody tr td");
        const searchInput = document.querySelector("#searchField");

        [...tableData].forEach((e) => {
            if (
                searchInput.value &&
                e.textContent.includes(searchInput.value)
            ) {
                e.parentNode.className = "select";
                return;
            }
        });
        searchInput.value = "";

        function resetSelectStyles() {
            [...document.querySelectorAll("tr")].forEach((e) =>
                e.classList.remove("select")
            );
        }
    }
}
