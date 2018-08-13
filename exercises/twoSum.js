function twoSum(numArray, sum){
    // Returns every pair of numbers from 'numArray' that adds up to the 'sum';
    /* 
    Guidelines:
        1. Result should be array of arrays
        2. any num in the 'numArray' can be used in multiple pairs
    If figure out O(n^2) solution, try to come up with O(n) solution
    */
   let pairsArray = [];
   let hashTable = [];

   for (let i=0; i< numArray.length; i++){
       let currNum = numArray[i];
       let counterpart = sum - currNum;
       if (hashTable.includes(counterpart)) pairsArray.push([currNum, counterpart]);
       hashTable.push(currNum);
   }

   return pairsArray
}

console.log('result: ', twoSum([1,6,4,5,3,3], 7));
console.assert(JSON.stringify(twoSum([1,6,4,5,3,3], 7)) === JSON.stringify([[6,1], [3,4], [3,4]]));

/*
   Steps:
    1. use an array as a hashmap - we will add all the nums in the array to this hashmap
    2. while loop over all the elements in the array:
        - check to see if the currentElement's counterpart is there - ie. 
        if num = 4, sum = 7, counterpart is 3 bc 7 - 4 === 3
        - if it is, add those the currElement and its counterpart to the pairsArray
        - add the currNum to the array
    */



















































///////---------------------------
/* 1 - Brute Force Solution
    1. loop through each elem in array
    2. loop through each other elemen in array
    3. if elem + otherElem = 9, push indices onto sum array
    4. return sum array

*/

// var twoSum = function(nums, target){
//     var sums = [];

//     // check each element in array
//     for (var i=0; i< nums.length; i++){

//         // check each other element in the array
//        for (var j = i+1; j < nums.length; j++){
//             if (nums[i] + nums[j] === 9){
//                 sums.push(i, j)
//             } 
//        }
       
//    }
   
//    return sums;
// }

// console.log(twoSum([2,7,11, 15], 9))

/*
Time complexity:
    0(n2), because for each input, we need to evaluate another input - ie. looping through the array twi e
*/

/* Faster solution 

If the array is: [4, 5, 1, 8] and the sum is 6 the algorithm would proceed with the steps below:

(1) The hash table is initially empty and the first element in the array is 4. We simply put 4 into the hash table.
(2) The next element is 5. We check to see if the sum minus the current element exists in the hash table. 6 - 5 = 1 does not exist in the hash table. So add 5 to the hash table.
(3) The next element is 1. We check to see if the sum minus the current element exists in the hash table. 6 - 1 = 5 does exist in the hash table so we found a pair!

// */

// var twoSum = function(arr, sum){
//     var sums = [];
//     var hashTable = {};

//     // check each elem in array
//     for (var i = 0; i< arr.length; i ++){
        
//         // calculate sum - current element
//         var sumMinusElement = sum - arr[i];

//         // check if this number exists in the hash table 
//         if (hashTable.hasOwnProperty(sumMinusElement)){
//             // if sumMinusElement does exist in the array - we have a match! add the index of the sumMinusElement and the current index to the sums array
//             sums.push(arr.indexOf(sumMinusElement), i)            
//         } else {
//             // if sumMinusElement does not exist in the array - we don't have a match, so just add currentElement as a prop in the hash table ( so we can check for the future)
//             hashTable[arr[i]] = true;
//         }

//     }

//     // return all pairs of integers that sum to S
//     return sums
// }

