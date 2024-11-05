function solve(input){
    
    const bitcoinCurrency = 11949.16;
    const goldCurrency = 67.51;

    let buyedBitcoin = 0;
    let firstBitcoinDay;
    let amount = 0;

    input.forEach((el, i) => {
        const currentDay = i + 1;
        if(currentDay % 3 == 0) el *= 0.7;
        amount += el * goldCurrency;
        const bueydBitcoinToday = Math.floor(amount / bitcoinCurrency);
        if(bueydBitcoinToday) {
            if(!firstBitcoinDay) firstBitcoinDay = currentDay;
            amount -= bueydBitcoinToday * bitcoinCurrency;
            buyedBitcoin += bueydBitcoinToday;
        }
    });
    console.log(`Bought bitcoins: ${buyedBitcoin}`);
    if(firstBitcoinDay) console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    console.log(`Left money: ${amount.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);