class BoggleBoard {

  constructor(x = 4, y = 4){
    this._sizeX = x;
    this._sizeY = y;
    this.isiBoard = [];
    this._currPos = [2,2];
    this._nextChar = [];
  }

  findNextChar(x,y){
    var i;

    for (i = 0; i < 3; i++) {
        this._nextChar[i] = []

    // col ke 0
        this._nextChar[i][0] = this.isiBoard[x-1][y-1]

    // col ke 1
        this._nextChar[i][1] = this.isiBoard[x-1][y]

    // col ke 2
        this._nextChar[i][2] = this.isiBoard[x-1][y+1]
    }
    console.log("Next Char" , this._nextChar)

  }

  findWord(){


  };

  wordIsFound() {

  }


}


var myBoggle = new BoggleBoard(5,5)
console.log(myBoggle)
