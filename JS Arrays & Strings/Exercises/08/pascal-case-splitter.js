function solve(input){
    const regex = /[A-Z][a-z]*/g;
    console.log(input.match(regex).join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');
