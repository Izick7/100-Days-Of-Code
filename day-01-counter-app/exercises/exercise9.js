// exercise 9
let word = "programing"
let vowelCount = 0;
let vowels = ["a", "e", "i", "o", "u"];
for(i = 0; i < word.length; i++){
    if(vowels.includes(word[i])){

        vowelCount ++

    }
   
}
 console.log(vowelCount);