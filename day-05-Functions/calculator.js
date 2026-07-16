function calculator(a, b, operator) {
    if (operator === "+") {

        return a + b

    }

    else if (operator === "-") {
        return a - b

    }

    else if (operator === "*") {
        return a * b

    }

    else if (operator === "/") {
        return a / b

    }


    else if (operator === "%") {
        return a % b

    }

    else {
        return "Not an operator"
    }



}

console.log(calculator(100, 5, "-"))