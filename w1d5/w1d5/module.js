var numberArray = [];

module.exports = {
	storeNumber: function storeNumber(num) {
		numberArray.push(num);
		console.log('store');
	},
	sortNumbers: function sortNumbers() {
		if (numberArray.length > 0) {
			numberArray.sort((a, b) => a - b);
			console.log("This is my number array: ", numberArray);
		} else {
			console.log('yo nothing to sort!');
		}
	}
}