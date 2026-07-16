function isPositive(number) {
    return number % 2 === 0;

}
console.log(isPositive(50));


function isEligibleToVote(age) {
    return age >= 18;

}
console.log(isEligibleToVote(20));


function getGrade(score){
    if(score >= 90){
        return "A"

    }

    else if(score >= 80 && score <= 89){
        return "B"
    }

    else if(score >= 70 && score <= 79){
        return "C"

    }

     else if(score >= 60 && score <= 69){
        return "D"

    }

     else if(score < 60){
        return "F"

    }

    else{
        return "Not a score"
    }


}
console.log(getGrade(100))


function maxOfThree(a, b, c) {

    if (a > b && a > c) {
        return a
    }

    else if (b > a && b > c) {
        return b
    }

    else if (c > a && c > b) {
        return c
    }
    else {
        return "ALL MAXED"
    }


}
console.log(maxOfThree(300, 300, 300))
