// Pair Programming - Word Search Challenge Paired By: Aleksandar, Eric & Thurston
const {transpose} = require('./transpose');

const wordSearch = (letters, word) => { 

  const forLoop = (array) => {

    for (l of array) {
      if (l.includes(word)) {
        return true;
      } 
    }
    return false;
  };

  // Horizontal Cases
  const horizontalJoin = forLoop(letters.map(ls => ls.join('')));
  // Vertizal Cases
  const verticalJoin = forLoop(transpose(letters).map(ls => ls.join('')));
  // Backwards Cases
  const reversedLetters = forLoop(letters.map(ls => ls.reverse().join('')));

  if (horizontalJoin || verticalJoin || reversedLetters) {
    return true;
  } else {
    return false;
  }


  //Find diagonal function unfinished
//   let i = 0;
//   let j = 0;
//   let wordIndex = 0;
//   const diagonalSearch = (i, j, wordIndex) => {
//     for (i = 0; i < letters.length; i++) {
//         for (j = 0; j < letters.length; j++) {
//             if (letters[i][j] === word[wordIndex]) {
//               diagonalSearch(i+1, j+1, wordIndex+1);
//             }
//         }    
//     }

//   };


}

module.exports = wordSearch




