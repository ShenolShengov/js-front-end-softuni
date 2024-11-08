function solve(len){
    const sequence = 'ATCGTTAGGG';
    let sequencePosition = 0;
    let asteriskCount = 2;
    let hypenCount = 0;
    let step = -1;
    for(let i = 0; i < len; i++){
        printRow(asteriskCount, hypenCount, sequencePosition, sequence);
        sequencePosition += 2;
        asteriskCount += step;
        hypenCount -= step;
        if(asteriskCount == 0 || asteriskCount == 2){
            step = -step;
        }
    }
    function printRow(asteriskCount, hypenCount, sequencePosition, sequence){
        const asteriks = '*'.repeat(asteriskCount);
        const hypens = '-'.repeat(hypenCount);
        const firstSymbol = symbolToShow(sequencePosition++, sequence);
        const secondSymbol = symbolToShow(sequencePosition, sequence);
        console.log(`${asteriks}${firstSymbol}${hypens.repeat(2)}${secondSymbol}${asteriks}`);
    }
    function symbolToShow(index, sequence){
        return sequence[index % sequence.length];
    }
}
solve(4);
solve(10);
