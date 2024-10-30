function solve(lostFightsCount, helmletPrice, swordPrice, shieldPrice, armorPrice){
    const helmletsExpenses = Math.floor(lostFightsCount / 2) * helmletPrice;
    const swordsExpenses = Math.floor(lostFightsCount / 3) * swordPrice;
    const shieldsExpenses = Math.floor(lostFightsCount / 6) * shieldPrice;
    const armorExpenses = Math.floor(lostFightsCount / 12) * armorPrice;
    const totoalExpenses = helmletsExpenses + swordsExpenses + shieldsExpenses + armorExpenses;
    console.log(`Gladiator expenses: ${totoalExpenses.toFixed(2)} aureus`);
}
solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);