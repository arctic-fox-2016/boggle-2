"use strict"

// import words from "./data.js"

class BoggleBoard {
  constructor(height, width) {
    this._board = [];
    this._height = height;
    this._width = width;
    this._h = 0;
    this._w = 0;
    this._dictionary = [];
    this._acceptWords = [];
    this._rejectWords = [];
    this._potentWords = [];
  }

  shake() {
    // Repeat for every board height
    for (var h = 0; h < this._height; h++) {
      this._board.push([]);

      // Repeat for every board width
      for (var w = 0; w < this._width; w++) {

        // Push random letter using function
        this._board[h].push(this.random_letter());
      }
    }

    // Return board
    return this._board;
  }

  get_board() {
    return this._board;
  }

  random_letter() {
    // Return capital letter between A to Z
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }

  solver() {

    this._dictionary = words;
    // this._board = [["M", "A", "K", "M"], ["T", "N", "S", "F"], ["L", "N", "F", "I"], ["Z", "Q", "W", "R"]];
    var h = 0;
    var w = 0;

    this.enter_all_letters_into_potential_word_array();

    do {
      // Determine position of last letter of potential word
      h = this._potentWords[0].letter[this._potentWords[0].letter.length-1].coordinates[0];
      w = this._potentWords[0].letter[this._potentWords[0].letter.length-1].coordinates[1];

      // Check edges
      if (h > 0) {

        // Check top right
        if (w < this._width - 1) {
          this.check_letter_not_used_previously(this._potentWords[0].word, this._board[h-1][w+1], h-1, w+1, "TR");
        }

        // Check top left
        if (w > 0) {
          this.check_letter_not_used_previously(this._potentWords[0].word, this._board[h-1][w-1], h-1, w-1, "TL");
        }

        // Check top
        this.check_letter_not_used_previously(this._potentWords[0].word, this._board[h-1][w], h-1, w, "T");
      }

      // Check edges
      if (h < this._height - 1) {

        // Check bottom right
        if (w < this._width - 1) {
          this.check_letter_not_used_previously(this._potentWords[0].word, this._board[h+1][w+1], h+1, w+1, "BR");
        }

        // Check bottom left
        if (w > 0) {
          this.check_letter_not_used_previously(this._potentWords[0].word, this._board[h+1][w-1], h+1, w-1, "BL");
        }

        // Check bottom
        this.check_letter_not_used_previously(this._potentWords[0].word, this._board[h+1][w], h+1, w, "B");
      }

      // Check right
      if (h < this._width - 1) {
        this.check_letter_not_used_previously(this._potentWords[0].word, this._board[h][w+1], h, w+1, "R");
      }

      // Check left
      if (w > 0) {
        this.check_letter_not_used_previously(this._potentWords[0].word, this._board[h][w-1], h, w-1, "L");
      }

      // Check if word exists in dictionary
      for (var i = 0; i < this._dictionary.length; i++) {
        if(this._dictionary[i] == this._potentWords[0].word) {
          this.store_accepted_word(this._potentWords[0].word, i);
        }
      }

      this._potentWords.shift();

    } while (this._potentWords.length > 0);

    return this._acceptWords;
  }

  enter_all_letters_into_potential_word_array() {
    // Initiate, place all one letter words to
    for (var h = 0; h < this._height; h++) {
      for (var w = 0; w < this._width; w++) {
        this._h = h;
        this._w = w;
        this._potentWords.push({
          word: this._board[h][w],
          letter: [{
            value: this._board[h][w],
            coordinates: [h, w]
          }]
        });
      }
    }
  }

  check_letter_not_used_previously(word, newLetter, h, w, pos) {
    for (var i = 0; i < this._potentWords[0].letter.length; i++) {
      if (this._potentWords[0].letter[i].coordinates[0] == h && this._potentWords[0].letter[i].coordinates[1] == w) {
      } else {
        this.check_word_in_dictionary(word, newLetter, h, w, pos);
      }
    }
  }

  check_word_in_dictionary(word, newLetter, h, w, pos) {
    // Create regex to store word
    var re = new RegExp("\^" + word + newLetter);

    // Loop through every word in dictionary
    for (var i = 0; i < this._dictionary.length; i++) {
      if(this._dictionary[i].match(re) != null) {
        this.store_potential_word(word, newLetter, h, w);
      }
    }
  }

  store_potential_word(word, newLetter, h, w) {
    var tempWord = {
      word: this._potentWords[0].word,
      letter: []
    }

    for (var i = 0; i < this._potentWords[0].letter.length; i++) {
      var tempLetter = {
        value: this._potentWords[0].letter[i].value,
        coordinates: [this._potentWords[0].letter[i].coordinates[0], this._potentWords[0].letter[i].coordinates[1]]
      }
      tempWord.letter.push(tempLetter)
    }

    this._potentWords.push(tempWord);
    this._potentWords[this._potentWords.length-1].word = word + newLetter;
    this._potentWords[this._potentWords.length-1].letter.push({
      value: newLetter,
      coordinates: [h, w]
    })
  }

  // Store accepted word into the list of available words in dictionary, COMPLETE
  store_accepted_word(word, i) {
    if(this._acceptWords.indexOf(word) == -1) {
      this._acceptWords.push(word);
    }
  }
}

var boggle = new BoggleBoard(4, 4);
boggle.shake();
console.log(boggle.solver());
