const students = [
    {
        id:1,
        firstName: "Jonas",
        lastName: "Jonaitis",
        group: "JS22",
        results: {
            'db': 7.5,
            'js': 8,
            'Linux': 6
        }
    },
    {
        id:2,
        firstName: "Petras",
        lastName: "Petraitis",
        group: "JS23",
        results: {
            'db': 5.5,
            'js': 4,
            'Linux': 9
        }
    },
    {
        id:3,
        firstName: "Vardenis",
        lastName: "Pavardenis",
        group: "JS23",
        results: {
            'db': 4.5,
            'js': 8,
            'Linux': 6
        }
    },
    {
        id:4,
        firstName: "Tomas",
        lastName: "Tomaitis",
        group: "JS24",
        results: {
            'db': 9.5,
            'js': 4,
            'Linux': 6
        }
    },
    {
        id:5,
        firstName: "Ieva",
        lastName: "Ievaite",
        group: "JS24",
        results: {
            'db': 9.5,
            'js': 8,
            'Linux': 9
        }
    }
]

let filteredStudents = students.filter((student)=> 
    student.firstName.length > 5
)

console.log(filteredStudents);


//parasyk funkcija, kuri gavus grupe kaip paramentra atfiltruotu tai grupei priklausancius studentus

function filteredStudentsFunc(group){
    const filteredStudentsTwo = students.filter((student)=>student.group === group);
    return filteredStudentsTwo;
};

console.log(filteredStudentsFunc("JS24"));

//parasyk funkcija, kuri gavus vidurki, kaip parametra, atrinktu students, kurie atitinka vidurki arba ji virsija


const getAverage = (array) =>{
    return array.reduce((a, b) => a + b) / array.length;
}

const getByAverage = (average) =>{
    let filteredStudentsByAvg = students.filter((student)=> getAverage(Object.values(student.results)) >= average);

    return filteredStudentsByAvg;
}

console.log(getByAverage(8));

