// Given a string, return the character that is most commonly used in the string
function maxChars(str){
    let countMap = {};
    for (let i=0; i< str.length; i++){
        let currChar = str[i];
        if (!countMap[currChar]){
            countMap[currChar] = 1;
        } else {
            countMap[currChar]++
        }
    }
    let maxFrequency = 0;
    let mostCommonChar = [];

    for (let char in countMap){
        // if the frequency is higher than the recorded max, replace the "mostCommonChar" array with just that char
        // if the fequency is the ame as the recorded max, add that char to the array
        if (countMap[char] > maxFrequency){
            maxFrequency = countMap[char];
            mostCommonChar = [char]
        } else if (countMap[char] === maxFrequency){
            // check if the char is already in the mostCommonChar array
            if (!mostCommonChar.includes(char)) mostCommonChar.push(char);
        }
    }

    return mostCommonChar.join();
}

console.assert(maxChars('aple 1231111') === '1', 'base case');
console.assert(maxChars('abbbccc') === 'b,c', 'with two max chars');
