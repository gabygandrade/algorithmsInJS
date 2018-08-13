function sumNumbers(num) {
    if (num === 0) return 0
    else {
        let smallerNum = num - 1;
        return num + sumNumbers(smallerNum);
    }
}

console.assert(sumNumbers(3) === 6, 'base case')
