function solve(grade){
    console.log(gradeDescription(grade), `(${grade < 3 ? grade.toFixed(0) : grade.toFixed(2)})`);

    function gradeDescription(grade) {
        if (grade >= 5.50) return 'Excellent';
        if (grade >= 4.50) return 'Very good';
        if (grade >= 3.50) return 'Good';
        if (grade >= 3.00) return 'Poor';
        return 'Fail';
    }
}
solve(3.33);
solve(4.50);
solve(2.99);