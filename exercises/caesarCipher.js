function caesarCipher(str, num){
    // add this in case num is a value > 26. So if num == 30, we only have to shift our letter by 4 instead of 30 times
    num = num % 26 
    let newString = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < str.length; i++){
        let currentLetter = str[i];
        if (currentLetter === ' '){
            newString = newString + ' ';
            // continue will move our for loop onto the next iteration without executing the rest of the code in the loop
            continue
        }

        let isUpperCase = currentLetter === currentLetter.toUpperCase();
        if (isUpperCase){
            currentLetter = currentLetter.toLowerCase();
        }

        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;

        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;

        let shiftedLetter = alphabet[newIndex];
        if (isUpperCase && shiftedLetter !== ""){
            shiftedLetter = shiftedLetter.toUpperCase();
        }

        newString += shiftedLetter;
    }
    
    return newString;
}

console.assert(caesarCipher('zoo keeper', 2) === 'bqq mggrgt', 'shift by a positive value');
console.assert(caesarCipher('Big Car', -16) === 'Lsq Mkb', 'shift by a negative value');
console.assert(caesarCipher('Zoo Keeper', 2) === 'Bqq Mggrgt', 'handle upper and lowercase letters');
console.assert(caesarCipher('Javascript', -900) === 'Tkfkcmbszd', 'pass in very big number');

/*
Questions:
- should we care about capitalization? y
- keep spaces - y
- HANDLE NEGATIVE numbers - shifts characters backwards

0. define alphabet string
declare currentIndex = alph.indexOf('str')
define newIndex = currentIndex + num;
if newIndex > 25, newIndex = newIndex - 26

*/

// source code from Udemy:
/*
function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  
  return newString;
}
*/