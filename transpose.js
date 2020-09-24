// Pair Programming - There Is No Spoon Challenge Paired By: Aleksandar, Bryn & Kevin
const transpose = function(matrix) {
  let finalArr = [];
  const rowsFinal = matrix[0].length;
  const columnsFinal = matrix.length;

  for (let row = 0; row < rowsFinal; row++) {
    finalArr[row] = [];
    for (let column = 0; column < columnsFinal; column++) {
      finalArr[row][column] = matrix[column][row];
    }
  }
  return finalArr;
};

module.exports = { transpose };