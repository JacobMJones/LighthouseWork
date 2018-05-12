var wordsArray = [...process.argv].slice(2);

var newWordsArray = [];

console.log(wordsArray);

function reverseWords() {

    var newWordsArray = [];

    for (var i = 0; i < wordsArray.length; i++) {
    
        var wordToReverse = wordsArray[i];
        var newWord = "";
        for (var a = wordToReverse.length -1; a >= 0; a--) {
            newWord += wordToReverse[a];

        }
        newWordsArray.push(newWord);
    }
    console.log(newWordsArray);
}
reverseWords();
