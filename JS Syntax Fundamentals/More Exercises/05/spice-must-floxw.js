function solve(startingYeld){
   let amountOfSpice = 0;
   let dayCouner = 0;
   while(startingYeld >= 100){
    dayCouner++;
    amountOfSpice += Math.max(0, startingYeld - 26);
    startingYeld -= 10;
   }
   amountOfSpice = Math.max(0, amountOfSpice - 26);
   console.log(dayCouner);
   console.log(amountOfSpice);
}
solve(111);
solve(450);