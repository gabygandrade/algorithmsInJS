function fibMemo(index, cache){
    // index: index of number in fibonacci sequence that we want to retrieve
    // cache: an array used as memory

    // whenever we calculate a fib number, we will put it into this cache
    // as fn gets called recursively, will pass in cache as parameter every time fn is called so we never lose track of nums
    cache = cache || [];
    if (cache[index]) return cache[index];
    else {
        if (index < 3) return 1;
        else {
            cache[index] = fibMemo(index-1, cache) + fibMemo(index-2, cache);
        }
    }
    return cache[index];
}

/* Steps:
- check to see if num already exists in cache
- if num is in cache, use that number
- if num is not in cache, calculate it & put it in cache so it can be used multiple times in future
*/

// console.assert(fibMemo(12) === 144);
// console.assert(fibMemo(8) === 21);
// console.assert(fibMemo(50) === 12586269025);