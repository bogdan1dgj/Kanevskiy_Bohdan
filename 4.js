const students = [
    {
        name: "Іван",
        grades: { math: 10, english: 8, history: 9 }
    },
    {
        name: "Марія",
        grades: { math: 12, english: 11, history: 10 }
    },
    {
        name: "Олег",
        grades: { math: 7, english: 9, history: 8 }
    }
];

students.forEach(student => {
    const grades = Object.values(student.grades);
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }

    const average = sum / grades.length;

    console.log(student.name + ": " + average.toFixed(2));
});