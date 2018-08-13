// reverse string recursively 

// function reverseString(string) {
//     if (string === "") return "";
//     else return reverseString(string.substring(1)) + string.charAt(0)
// }

// another way, that I think makes the most sense:
function reverseString(string) {
    // take last letter
    const lastIndex = string.length - 1;
    const lastLetter = string.charAt(lastIndex);
    let reversed = "";

    if (string === "") return "";
    else {
        reversed = lastLetter + reverseString(string.substring(0, lastIndex))
    }
    return reversed;
}

reverseString('hello');
console.log(reverseString('hello'))
console.assert(reverseString('hello') === 'olleh', 'base case')

/* Learnings from this:
- rememember a recursive fn doesnt need to return right away, 
it can keep calling itself and then return something at the end
*/






/*
1st call - reverseString('gaby') --> return reverseString('aby') + 'g'
2nd call - reverseString('aby') --> return reverseString('by') + 'a'
3rd call - reverseString('by') --> return reverseString('y') + 'b'
4th call - reverseString('y') --> return reverseString('') + 'y'
Here, method hits base case condition & most highly nested call returns immediately:

4th call - reverseString('y') --> return reverseString('') + 'y'  = '' + 'y' = 'y'
3rd call - reverseString('by') --> return reverseString('y') + 'b' = 'y' + 'b' = 'yb'
2nd call - reverseString('aby') --> return reverseString('by') + 'a' = 'yb' + 'a' = 'yba' 
1st call - reverseString('gaby') --> return reverseString('aby') + 'g' = 'yba' + 'g' = 'ybag'

"" + y  = "y"
"y" + b = "yb"

*/

// console.assert(reverseString('gaby') === 'ybag');