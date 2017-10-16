/*1. Write a function such that if an element in an MxN matrix is 0 , its entire row and column are set to 0 and then printed
out.
// Original input
[
 [1, 2, 3],
 [4, 0, 6],
 [7, 8, 9]
]
// Result
[
 [1, 0, 3],
 [0, 0, 0],
 [7, 0, 9]
]*/

function setZeroes(matrix){
  
	var firstRow = false;
  var firstCol = false;
  
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          firstRow = true;
        }

        if (j === 0) {
          firstCol = true;
        }

        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
    
  for (var i = 1; i < matrix.length; i++) {
    for (var j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRow) {
    for (var i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (firstCol) {
    for (var i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
    
  console.log(matrix);
	
}

var matrix = [
	[1,2,3],
	[4,0,6],
	[7,8,9]
];

setZeroes(matrix);