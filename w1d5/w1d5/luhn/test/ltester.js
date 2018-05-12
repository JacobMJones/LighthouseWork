var assert = require("chai").assert;
var luhn = require("../luhn.js");


describe("Luhn", function() {
	it("the sum should be 8", function() {
		
		var sumToCheck = 8;
		var result = luhn.check(luhn.num1, luhn.num2);
		assert.isTrue(result === 8);
	})
});