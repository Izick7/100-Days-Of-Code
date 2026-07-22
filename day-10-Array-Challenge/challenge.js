// // Challenge 1

let students = ["Isaac", "Benjamin", "Elisha", "Samson"];

// function addStudentName(name){

//     addStudent = students.push(name);

//     return students;

// }
// console.log(addStudentName("Zicko"));

// Challenge 2
function removeStudentName(name){

    if(students.includes(name)){
        return students.pop(name)
    }

    else{
        return "Student not Found";
    }


   

}
console.log(removeStudentName("Benjamin"));

Challenge 3

function isRegistered(name){

    if(students.includes(name)){
        return true;
    }

    else{
        return false;
    }

}
console.log(isRegistered("Samson"));

function getFirstThree(index1, index2){
    getStudents = students.slice(index1, index2);

    return getStudents
}
console.log(getFirstThree(0, 3));

// Challenge 5

function replaceStudentName(oldName, newName){

    let replace = students.indexOf(oldName);
    let replaced = students.splice(oldName, newName);
    
    
}
console.log(replaceStudentName("Isaac", "Vanessa"));

