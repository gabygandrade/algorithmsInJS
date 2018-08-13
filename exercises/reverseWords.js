function reverseWords(string) {
    // reverse every word in the string
    // return the new string
    const wordsArray = string.split(' ');
    let reversedWordsArray = [];

    wordsArray.forEach(word => {
        let reversedWord = "";
        for (var i = word.length - 1; i >= 0; i--) {      // loop through every letter in our word backwards - start at last character in our string, while i>=0; and decrement i by 1 on every iteration
            reversedWord += word[i];
        }
        reversedWordsArray.push(reversedWord);
    })

    return reversedWordsArray.join(' ');
}

console.assert(reverseWords('this is a string') === 'siht si a gnirts', 'base case');


/* 
Sample inputs/outputs:
'this is a string' --> 'siht si a gnirts' 

* do not use array.reverse() method:
  originalWordsArray.forEach(word => {
        let reversedArray = word.split('').reverse();
        let reversedWord = reversedArray.join('');
        reversedWordsArray.push(reversedWord);
    })

Steps:
1. split the string into an array by spaces --> ['this', 'is', 'a', 'string']
2. for each word in the array:
    loop over the word in reverse order, while appending that letter to a new reversedWord string
    push the reversedWord to a reversedWordsArray
3. join the reversedWordsrray into a string with a space btw the words
*/