// given an array of student..find and replace a student

// const students = [
//     "Isaac",
//     "Benjamin",
//     "Elisha",
//     "Samson"
// ];

// function replaceStudentName(oldName, newName) {


//     let replace = students.indexOf(oldName);
//     students.splice(replace, 1, newName);

//     return students;


// }
// console.log(replaceStudentName("Isaac", "Vanessa"));


// Student list manager 

const students = [
    "Isaac",
    "Benjamin",
    "Elisha",
    "Samson"
];

function addStudent(name) {
    students.push(name)
    return students
}
// console.log(addStudent("Zicko"));

function removeStudent(name) {

    if (students.includes(name)) {

        let remove = students.indexOf(name)
        students.splice(remove, 1)

        return students;

    }
     

    else{
        return "Student not found";
    }

}
// console.log(removeStudent("Isaiah"))

function isRegistered(name) {
    if(students.includes(name))
        return true;

    else{
        return false;
    }

}
// console.log(isRegistered("Ben"));

function getFirstThree(index1, index2) {

    getStudents = students.slice(index1, index2);

    return getStudents

}
console.log(getFirstThree(0, 3))


function replaceStudent(oldName, newName) {

}

function getStudentCount() {

}

