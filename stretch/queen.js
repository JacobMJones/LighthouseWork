var whiteQueen = [0, 3];
var blackQueen = [2, 1];


function generateBoard(whiteQueen, blackQueen) {

	var whiteRow = whiteQueen[0];
	var whiteColumn = whiteQueen[1];
	var blackRow = blackQueen[0];
	var blackColumn = blackQueen[1];

	var boardArray = [];
	for (var i = 0; i < 8; i++) {
		var internalArray = [];
		for (var a = 0; a < 8; a++) {

			if (i == whiteRow && a == whiteColumn) {
				internalArray.push('1');
			} else if (i == blackRow && a == blackColumn) {
				internalArray.push('1');
			} else {
				internalArray.push('0');
			}

		}
		boardArray.push(internalArray);
	}
	queenThreat(boardArray)
	console.log(boardArray);
}


function queenThreat(board) {

	var firstRow;
	var firstColumn;
	var secondRow;
	var secondColumn;
	var haveFirstCoord = false;
	for (var i = 0; i < 8; i++) {
		for (var a = 0; a < 8; a++) {

			if (board[i][a] == '1') {
				if (!haveFirstCoord) {
					firstRow = i;
					firstColumn = a;
				} else {
					secondRow = i;
					secondColumn = a;
				}
			}
		}
	}
}

generateBoard(whiteQueen, blackQueen);

   //horizontal
    if (whiteQueen[0] == blackQueen[0]) {
		console.log('There is a horizontal threat');
    }

    //vertical
    if (whiteQueen[1] == blackQueen[1]) {
		console.log('There is a vertical threat');
    }
    //diagonal
    if (whiteQueen[0] - blackQueen[0] == whiteQueen[1] - blackQueen[1] || 
    	whiteQueen[0] - blackQueen[0] == blackQueen[1] - whiteQueen[1] ) {
		console.log('There is a diagonal threat');
    }
