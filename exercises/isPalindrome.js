// pass 1 w/regex:
// function isPalindrome(string){
//     let inputArray = string.replace(/ /g,'').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split('');
//     let numsToIterateOver = Math.floor(inputArray.length/2);
//     var endingIndex = 1;
    
//     for (let i = 0; i < numsToIterateOver; i++){
//       // LEARNING: initially had:
//       // let endingIndex = 1 - but this didnt work bc variables declared w/let are block scoped, so this was being reset to 1 after every loop iteration
//       if (inputArray[i] === inputArray[inputArray.length - endingIndex]){
//         endingIndex++;
//         continue
//       } else {
//         return false;
//       }
//     }
    
//     return true;
// }

// solution without regex
function isPalindrome(string){
  string = string.toLowerCase();
  var charArr = string.split('');
  var validLetterArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  // create a new array that only has valid letters by looping through each character in the 
  // charArray and checking if that character is in validLetterArr
  var letterArr = [];
  charArr.forEach(char => {
    if(validLetterArr.indexOf(char) > -1) letterArr.push(char);
  });
  // now we have a letterArray with only valid letters
  // check if the string version of lettersArray is equal to the reverse of of that array
  if (letterArr.join('') === letterArr.reverse().join('')) return true;
  else return false;
}
  
// Both test cases should return true:
console.log(isPalindrome("Madam, I'm Adam") === true);
console.log(isPalindrome('race car') === true);
console.log(isPalindrome('race') === false);

  
  /* Process
  
  1) Clarifying questions:
        
  ignore punctuation like commas
  assume all lowercase inputs 
  
  2) Test cases:
   "race car" => true
   "race"    => false
  
  3) Steps:
  1. remove whitespace from string, make into Array
  
    ['r', 'a', 'c', 'e', 'c', 'a', 'r']
    
  2. loop through half the items in the array 
    at index=0, check if word is the same @ index[length-1]
    increment index; 0->1
    increment endIndex; length-2

  3. Runtime:
  O(n/2) --> 0(n)

  How to optimize this?

    
    
  
  */