/*

1. Write a function such that if an element in an MxN matrix is 0 , its entire row and column are set to 0 and then printed
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
]

*/

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

/*

2. Write a function that convert the given number into a Roman Numeral - The function needs to receive a Number and
Return a String (The Number can be between 1 and 3999)

Example:

getRomanNumeral(512);

Prints: DXII

*/

function getRomanNumeral (num) {
    if (!+num || num < 1 || num > 3999)
        return 'The Number can be between 1 and 3999';
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

console.log(getRomanNumeral(512));

/*

3. Write a function to perform basic string compression using the counts of repeated characters; e.g "aabcccccaaa"
would become "a2b1c5a3" . If the compressed string would not become smaller than the original string, just print the
original string.

*/

function compression(str) {

    var count = 1;
    var previousChar = str.charAt(0);
    var compressedStr = '';
    var strLength = str.length;
    
    for (var i = 1; i < strLength; i++) {
        var currentChar = str[i];
        if(previousChar === currentChar) {
            count++;
        } else if (count === 1) {
            compressedStr += previousChar + count;
            previousChar = currentChar;
        } else {
            compressedStr += previousChar + count;
            previousChar = currentChar;
            count = 1;
        }
    }

    if (count === 1) {
        compressedStr += currentChar;
    } else {
        compressedStr += currentChar + count;
    }
    if (compressedStr.length > str.length) {
    	return str;
    } else {
    	return compressedStr;
    }
}

console.log(compression('aabcccccaaa'));