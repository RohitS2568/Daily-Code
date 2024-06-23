//1 ------Check Array Length

function allString(str){
    str = str.trim();
    const word = str.split(" ");
    const checkWord = [];

    for (let i =0; i < word.length; i++){
        checkWord.push(word[i].length)
    }
    return checkWord;
}

const sentance = "Hy rozar";
const result = allString(sentance)
console.log(result);

//2.----------Check Array First Word Length

function firstWord(str) {
    // Use Also Trim including and add excluding you both conditions use
   str = str.trim(); // Remove leading and trailing whitespace   

//    Why Use trim():
//    Leading Spaces: Without trim(), leading spaces would result in an empty string as the first word.
//    Example: " hy rozar".split(" ") => ["", "hy", "rozar"]
//    Trailing Spaces: Without trim(), trailing spaces would not affect the first word, but it's good practice to clean up the input.
//    Example: "hy rozar ".split(" ") => ["hy", "rozar", ""]
   
    const word = str.split(" "); // Split the string into an array of words
    const checkWord = word[0]; // Get the first word from the array
    const wordLength = checkWord.length; // Get the length of the first word
    return wordLength; // Return the length of the first word
}

const sentence1 = "hy rozar"// Input string with leading and trailing spaces
const result1 = firstWord(sentence1); // Call the function with the input string
console.log(result1); // Outputs: 2 (length of "hy")
