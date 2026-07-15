// exercise 7
const numbers = [4, 7, 2, 19, 3, 15, 0];
let smallestNum = numbers[0]

for( i = 0; i < numbers.length; i++){
    if(numbers[i] < smallestNum){
        smallestNum = numbers[i]

        console.log(smallestNum);
    }
    


}
