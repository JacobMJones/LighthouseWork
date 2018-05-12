var words = ["ground", "control", "to", "major", "tom"];

function myMap(arr, callback) {
	var output = []
	arr.forEach(function(element) {
		output.push(callback(element))
	})

	return output
}

var testcase1 = myMap(words, function(word) {
  return word.length;
});

var testcase2 = myMap(words, function(word) {
  return word.toUpperCase();
});

var testcase3 = myMap(words, function(word) {
  return word.split('').reverse().join('');
});


console.log(testcase1 === [6, 7, 2, 5, 3])
console.log(testcase2 === [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ])
console.log(testcase3 === [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ])
