function solve(studentsGradesData){

    const studentsByGrade = studentsGradesData.reduce((students, studentData) => {
        const student = parseStudent(studentData);
        if(student.avgScore < 3) return students;
        const grade = Number(student.grade);
        students[grade] ??= [];
        students[grade].push(student);
        return students;
    }, {});

    Object.entries(studentsByGrade).sort(([g1, s1], [g2, s2]) => +g1 <= +g2 ? -1 : 1).forEach(([grade, students]) => {
            console.log(`${+grade + 1} Grade`);
            console.log(`List of students: ${students.map(e => e.name).join(', ')}`);
            console.log(`Average annual score from last year: ${getGradeAnnualScore(students).toFixed(2)}\n`);
    });


    function getGradeAnnualScore(students){
        return students.map(e => e.avgScore).reduce((acc, score) => acc + score) / students.length;
    }

    function parseStudent(studentData) {
        const [name, grade, avgScore] = studentData.match(/(?<=: )\w+\.*\d*/gm);
        return {
            name,
            grade: Number(grade),
            avgScore: Number(avgScore)
        };
    }
}
solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]);