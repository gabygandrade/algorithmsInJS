// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

// function chunk(array, size){
//     const chunkedArray = [];
//     let innerArray = [];
//     for (let i=0; i< array.length; i++){
//         let currElem = array[i];
//         if (innerArray.length < size) innerArray.push(currElem);
//         let lastIndex = array.length-1;
    
//         if (innerArray.length === size || i === lastIndex){
//             chunkedArray.push(innerArray);
//             innerArray = [];
//         }
//     }

//     return chunkedArray;
// }

// alternative approach using Array.slice();
function chunk(array, size){
    let chunkedArray = [];
    let index = 0;
    while (index < array.length){
        // push a "slice" of length "size" into the chunked array
        let slice = array.slice(index, index+size)
        chunkedArray.push(slice);
        index += size;
    }
    return chunkedArray;
}


console.assert(JSON.stringify(chunk([1,2,3,4], 2)) === JSON.stringify([[1,2],[3,4]]), 'base case');
console.assert(JSON.stringify(chunk([1,2,3,4,5], 2)) === JSON.stringify([[1,2],[3,4], [5]]), 'with remainder');
console.assert(JSON.stringify(chunk([1,2,3,4,5], 4)) === JSON.stringify([[1,2,3,4],[5]]), 'another with remainder');
console.assert(JSON.stringify(chunk([1,2,3,4,5], 10)) === JSON.stringify([[1,2,3,4,5]]), 'large size');

// This runs in constant time - 0(n)

/*
Questions:
- do we care what happens to original array? assume we don't

Steps:
0. initialize a chunkedArray var
1. loop through input array
    initialize an innerArray var
    push items onto the innerArray as long as innerArray.length <= size 
    push innerARray onto chunkedArray



*/