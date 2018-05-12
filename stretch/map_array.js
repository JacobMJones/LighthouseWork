let obj = {
	divisor: 10,
	remainder: function(value){
	return value % this.divisor;
	}
}

var numbers = [6, 12, 25, 30];

var result = numbers.map(obj.remainder, obj);


console.log(result);



function multiplyBy5(val){

	return val * 5
}

var byFiveArray = numbers.map(multiplyBy5);

console.log(byFiveArray);