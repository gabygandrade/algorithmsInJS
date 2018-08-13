/* Write a function called power which takes in a base and an exponent. 
    If the exponent is 0, return 1. 
    Otherwise, return the result of the base multiplied by the power function to the exponent - 1. 

 You can think of it in terms of this example:
    2^4 = 2 * 2^3;
    2^3 = 2 * 2^2;
    2^2 = 2 * 2^1;
    2^1 = 2 * 2^0; 
    2^0 = 1         // once our exponent is 0 we KNOW that the value is always 1!
*/

function power(base, exponent) {
    // if exponent is 0, return 1 
    // otherwise, return the 
    if (exponent === 0) return 1
    else {
        return base * power(base, exponent - 1)
    }
}

console.assert(power(2, 4) === 16, 'power base case');