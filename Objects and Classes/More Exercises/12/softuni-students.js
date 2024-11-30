function solve(commands) {
    const courses = proccessCourses(commands);

    printInfoForCourses(courses);

    function printInfoForCourses(courses) {
        sortCoursesByStudentsCountDesc(courses).forEach((c) => {
            console.log(
                `${c.name}: ${c.capacity - c.students.length} places left`
            );
            sortStudentsByCreditsDesc(c.students)
                .forEach(s => console.log(s.toString()));
        });
    }

    function sortStudentsByCreditsDesc(students){
        return students.sort((s1, s2) => s2.credits - s1.credits);
    }

    function sortCoursesByStudentsCountDesc(courses) {
        return Object.values(courses).sort(
            (c1, c2) => c2.students.length - c1.students.length
        );
    }

    function proccessCourses(commands) {
        const courses = {};

        commands.forEach((com) => {
            if (com.includes(": ")) {
                const [courseName, courseCapacity] = com.split(": ");
                const foundCourse = courses[courseName];
                
                if(foundCourse) {
                    foundCourse.capacity += +courseCapacity;
                    return;
                }

                courses[courseName] = {
                    name: courseName,
                    capacity: +courseCapacity,
                    students: [],
                };
                return;
            }

            const [username, creditsCount, email, courseName] = com.split(
                /\[|\] with email | joins /g
            );
            const course = courses[courseName];
            if (!course || course.students.length >= course.capacity) return;

            course.students.push({
                username: username,
                email: email,
                credits: +creditsCount,
                toString: () => {
                    return `--- ${creditsCount}: ${username}, ${email}`;
                }
            });
        });
        return courses;
    }
}
solve([
    "JavaBasics: 2",
    "user1[25] with email user1@user.com joins C#Basics",
    "C#Advanced: 3",
    "JSCore: 4",
    "user2[30] with email user2@user.com joins C#Basics",
    "user13[50] with email user13@user.com joins JSCore",
    "user1[25] with email user1@user.com joins JSCore",
    "user8[18] with email user8@user.com joins C#Advanced",
    "user6[85] with email user6@user.com joins JSCore",
    "JSCore: 2",
    "user11[3] with email user11@user.com joins JavaBasics",
    "user45[105] with email user45@user.com joins JSCore",
    "user007[20] with email user007@user.com joins JSCore",
    "user700[29] with email user700@user.com joins JSCore",
    "user900[88] with email user900@user.com joins JSCore",
]);
