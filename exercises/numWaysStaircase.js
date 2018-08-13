/*
There's a staircase with N steps, and you can climb 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways you can climb 
the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.
*/

function numWays(numSteps) {
    if (numSteps === 0) return 1;
    let ways = 0;
    [1, 2].forEach(step => {
        console.log({ step })
        if (numSteps - step >= 0) ways = ways + numWays(numSteps - step)
    });
}

console.assert(numWays(4) === 5, '4 as argument');

/*
numSteps
f(0) = 1
f(1) = f(0) = 1
f(2) = f(1) + f(0) = 1 + 1 = 2
f(3) = f(2) + f(1) = 2 + 1 = 3









/* 
Notes
- basically we are trying to find out the different combinations of 1 & 2 that can sum to numSteps
ex. numWays=4

if 1 appears 0 times --> 2 + x = 4
if 1 appears 1 time --> 1 + x = 4, 1 + 2 = 3 --> not possible
if 1 appears 2 times --> 1, 1, x, x = 4 --> 1, 1, 2
if 1 appears 3 times -->  1, 1, 1, 2 =  -->  not possible
if 1 appears 4 times --> 1, 1, 1, 1 

if 1 appears even # of times

if w appears:
0 times --> 1, 1, 1, 1
1 time --> 2, 1, 1
2 times --> 2, 2
3 times --> 2, 2, 2 --> not possible 

*/

