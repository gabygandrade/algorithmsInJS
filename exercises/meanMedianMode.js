/* Instructions:
    return:
    {
        mean: 'the mean value' - the average of all numbers - sumOfNumbers/howManyNumbersThereAre
        median: 'the median value' - the middle value if the data is organized from least to greatest. If the data set is an even number, calculate the median by taking the MEAN of the 2 middlemost numbers)
        mode: 'the mode value' - the value that occurs most often
    }

    write 4 functions:
    function getMean(array)
    function getMedian(array)
    function getMode(array)
    function meanMedianMode(){
        // call other 3 functions
        // return obj which has mean, median, mode on it 
    }
*/


function getMean(array){
    // Array.prototype.reduce can be used to iterate through the array, 
    // adding the current element value to the sum of the previous element values (ie. accumulator);
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    /* could also have done with .forEach() fn:
    let sum;
    array.forEach(num => {
        sum += num;
    })  */
    const mean = sum/array.length;
    return mean;
}

function getMedian(array){
    const isOddNumberedArray = array.length % 2 !== 0;
    array.sort((a,b) => a-b);
    let median;

    if (isOddNumberedArray){
        let middleIndex = Math.floor(array.length/2);
        median = array[middleIndex];
    } else {
        let midIndex1 = array.length/2;
        let midIndex2 = (array.length/2)-1;
        median = (array[midIndex1] + array[midIndex2])/2;
    }
    return median
}

function getMode(array){
    let countObj = {};

    array.forEach(num => {
        // if the num does not exist in the mode obj as a property, add that property and set it to zero. In the line below, increment that prop by 1 (every time, whether it exists or doesnt exist)
        if (!countObj[num]) countObj[num] = 0;
        countObj[num]++
    });
    
    let maxFrequency = 0;   // to keep track of the max number of times a number (or numbers) appear in the array
    let modes = [];         // modes should be an array instead of a num bc we can have more than 1 mode 
    for (let num in countObj){
        if (countObj[num] > maxFrequency){
            modes = [num]
            maxFrequency = countObj[num]
        } else if (countObj[num] === maxFrequency) modes.push(num) 
    }
    // there is an edge case where if all the numbers appear the same number of times ([4,4,7,7]) there is no mode:
    // to check for this we say: if number of modes in modes array ie. 2 [4,7] equals the number of keys in our countObj ie. 2 {4: 2, 7: 2}, then we have no mode
    // empty array signifies no mode 
    if (modes.length === Object.keys(countObj).length) modes = [];

    return modes;
}


function meanMedianMode(array){
    let resultObj = {
        'mean': getMean(array),
        'median': getMedian(array),
        'mode': getMode(array)
    };
    return resultObj
}

console.assert(JSON.stringify(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1])) === JSON.stringify({ mean: 3.25, median: 3.5, mode: ['1', '4'] }))
console.assert(JSON.stringify(meanMedianMode([9, 10, 23, 10, 23, 9])) === JSON.stringify({ mean: 14, median: 10, mode: []}), 'second test');

/*
Mean:	19.75
Median:	4 - GOT 3.5
Mode:	4, appeared 2 times - GOT UNDEFINED
*/


/*
QUESTIONS:
- should the getMean, getMedian, getMode fns be defined within meanMedianMode()?

ROOM FOR IMPROVEMENT
- should have asked if you can have more than 1 mode - think about edge cases more 
- when stuck on how to solve a problem, think about the data structures I already have to see how I can leverage them to come up w/solution
*/