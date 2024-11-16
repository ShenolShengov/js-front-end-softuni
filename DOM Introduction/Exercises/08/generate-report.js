function solve() {
    const output = document.querySelector("#output");
    const selectedRows = getSelectedRowsIndexes();
    const dataSelector = generateSelctorForRows(selectedRows);

    
    const data = [...document.querySelectorAll(dataSelector)].map(e => e.textContent);
    const formatedData = [];

    data.forEach((e, i) => {
        if((i + selectedRows.length) % selectedRows.length == 0){
            formatedData.push(processRow(data.slice(i, i + selectedRows.length), selectedRows));
        }
    });

    output.value = JSON.stringify(formatedData);

    function processRow(data, selectedRows){
        const rowsNames = getRowsNames();
        const row = {};
        data.forEach((e, i) => row[rowsNames[selectedRows[i]]] = e);
        return row;  
    }


    function getSelectedRowsIndexes(){
        const selectedRowsIndexes = [];
        document.querySelectorAll('input[type="checkbox"]')
            .forEach((e, i) => {
                if(e.checked) selectedRowsIndexes.push(i);
            });
        return selectedRowsIndexes;
    }
    
    function getRowsNames() {
        return [...document.querySelectorAll("thead tr th input")]
            .map(e => e.getAttribute('name'));
    };

    function generateSelctorForRows(rowIndexes){
        const singleRowSelector = (i) => `tbody tr td:nth-child(${i})`;
        let selector = [];
        rowIndexes.forEach((e, i) => selector.push(singleRowSelector(e + 1)));
        return selector.join(', ');
    }
}
