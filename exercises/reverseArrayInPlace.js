/* 
Reverse array in place
- manipulate array passed in
- return reversed array
- do not use arr.reverse()
*/

function reverseArrayInPlace(arr){
    // while we're looping through array, switch the first element in the array with the last one
    // only loop through half so that we don't replace elements
    let middle = Math.floor(arr.length/2);
    for (var i = 0; i < middle; i++){
        let tempVar = arr[i];       
        arr[i] = arr[arr.length-(i+1)];     // rewrite elem @ pos i to be its counterpart
        arr[arr.length-(i+1)] = tempVar;    // rewrite counterpart to be element originally at i
    }
    return arr;
}

console.assert(JSON.stringify(reverseArrayInPlace(['a', 'b', 'c', 'd', 'e'])) === JSON.stringify(["e", "d", "c", "b", "a"]), 'base case - odd number values');