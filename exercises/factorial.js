
/* 
Write a function that returns the factorial of a number. 
As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, 
and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1. For example:

factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
*/

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.assert(factorial(4) === 24, 'factorial base case')

/*
Steps for recursion
1. Write "if" bc have to have at least 2 cases:
- a recursive case (where method calls itself)
- a base case (where method does not call itself)

2. handle the simplest case 
Simplest case = no recursive call needed

3. Write the recursive call(s)
- that call should be passed simpler input, or problem should be made 1 step simpler before recrusive call
- if recursive call returns a value, we can store that value in some variable

4. assume recursive call works
Ask yourself: 
- What does it do?
- How does it help?
*/