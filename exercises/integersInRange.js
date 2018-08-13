function getIntegersInRange(startNum, endNum) {
    if (endNum - startNum === 2) return [startNum + 1];
    else {
        var list = getIntegersInRange(startNum, endNum - 1);
        list.push(endNum - 1);
        return list
    }
}

/*
Base case: 
Base case = simplest = The case where there is no recursive call
--> we would return an array with 1 value in it in this case:
getIntegersInRange(2, 4): bc --> 4-2 = 2 --> return 2 + 1 = [3]

With Example: getIntegersInRange(2, 7)
Base Case? 5-2 !=== 2, therefore move to line 3:

var list = getIntegersInRange(2, 5);
list.push(5)
return list 
*/

console.assert(JSON.stringify(getIntegersInRange(2, 6)) === JSON.stringify([3, 4, 5]));
