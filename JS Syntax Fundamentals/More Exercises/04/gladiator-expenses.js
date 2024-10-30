function solve(lostFightsCount, helmletPrice, swordPrice, shieldPrice, armorPrice){
    const brokenHelmlets = Math.floor(lostFightsCount / 2);
    const brokenSwords = Math.floor(lostFightsCount / 3);
    const brokenShields = Math.floor(lostFightsCount / 6);
    const brokenArmor = Math.floor(lostFightsCount / 12);
    const totoalExpenses = (brokenHelmlets * helmletPrice) + (brokenSwords * swordPrice)
     + (brokenShields * shieldPrice) + (brokenArmor * armorPrice);
    console.log(`Gladiator expenses: ${totoalExpenses.toFixed(2)} aureus`);
}
solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);