var originalArray = [...process.argv].slice(2);
var newArray = [];
var finalString = "";

function changeToPigLatin() {
    console.log(originalArray);
    for (var i = 0; i < originalArray.length; i++) {
     
        var wordToChange = originalArray[i];
        var firstLetter = wordToChange[0];
        var newWord = wordToChange.slice(1);
        newWord = newWord + firstLetter + 'ay' + ' ';
        newWord = newWord.toLowerCase();
        finalString += newWord;     
    }
    
console.log(finalString);
}
changeToPigLatin();
