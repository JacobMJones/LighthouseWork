function rollDice() {
  var amountOfDice = process.argv[2]
  var diceRollsString = "";

  for (var i = 0; i < amountOfDice; i++) {
    var number = Math.floor(Math.random() * 5 + 1);
    diceRollsString += number;  
    if (i !== amountOfDice - 1) {
      diceRollsString += ', ';
    }
      
  }
  return diceRollsString;
}
console.log(rollDice());
