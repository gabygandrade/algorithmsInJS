/* print out the nth entry in the fibonacci sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
- every number after 1,1 is the sum of the previous 2 numbers
*/

// with recursion
function fibonacci(n){
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
    // NOTE: this has a really bad runtime - O(2n)
}

/* Recursive thought process:

    // for base case - 
    // what is the situation in which we immediately know what number is found at the given position in the fib sequence?

    // for recursive case - 
    // if the position is not 1 or 2, how do we figure out the number at that position? 
    // since this is a fib sequence, we know that the number at a given position is the sum of the 2 numbers before it, so we can add the previous 2 numbers together to get the num at the position we're looking for
    // but we dont know the fib sequence in advance - so need to build it
    // BUT we know that purpose of fib function is to give us the number value of a certain position, so can use the fib function to figure out what those 2 previous numbers are

    // each of the fib functions being called in the recursive case will keep calling itself until it reaches the base case, in which both prev numbers are 1 & 1
    // then the recursive case will start to unwind & build up whole fib sequence until we reach sequence that we originally passed in

*/

// solution without recursion:
// function fibonacci(position){
//     const desiredIndex = position-1;
//     const fibSequence = [1,1];
//     let startingIndex = 0;
    
//     while (startingIndex < desiredIndex){
//         let nextNum = fibSequence[startingIndex] + fibSequence[startingIndex + 1];
//         fibSequence.push(nextNum); 
//         startingIndex++
//     }

//     if (startingIndex === desiredIndex){
//         return fibSequence[desiredIndex]
//     }
// }

console.assert(fibonacci(1) === 1, 'value for fib(1)');
console.assert(fibonacci(3) === 2, 'value for fib(3)');
console.assert(fibonacci(39) === 63245986, 'value for fib(39)');

/* Fibonacci Sequence: 
1, 1, 2, 3, 5, 8, 13, 21, 34
- every number after 1,1 is the sum of the previous 2 numbers
- good candidate for recursion bc have to keep doing the same thing 

Tips:
- base case deals w/the fact that first 2 numbers are always 0 & 1
*/