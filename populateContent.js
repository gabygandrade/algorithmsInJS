var arrayAndStringChallenges = [
    {
        name: 'Is Palindrome',
        url: 'https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707426?start=0',
    },
    {
        name: 'Caesar Cipher',
        url: 'https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707436?start=0'
    },
    {
        name: 'Reverse Words',
        url: 'https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707446?start=0'
    },
    {
        name: 'Reverse Array in Place',
        url: 'https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707464?start=0'
    },
    {
        name: 'Mean Median Mode',
        url: 'https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707480?start=0',
    },
    {
        name: 'Two Sum',
        url: 'https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707498?start=0'
    },
    {
        name: 'Max Chars',
        url: 'https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/learn/v4/t/lecture/8533090?start=15'
    },
    {
        name: 'Array Chunks',
        url: 'https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/learn/v4/t/lecture/8546942?start=0'
    }
]

var recursionChallenges = [
    {
        name: 'Sum Numbers',
        url: 'Sum numbers from num down to 0'
    },
    {
        name: 'Fibonacci',
        url: 'https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707540?start=0'
    },
    {
        name: 'Memoized Fibonacci - take a closer look later',
        url: 'https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707562?start=0'
    },
    {
        name: 'Power',
        url: 'https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-recursion'
    },
    {
        name: 'Reverse String Recursively',
        url: 'https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb'
    },
    {
        name: 'Get the integeres in range (x,y)',
        url: 'https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-3.php'
    },
    {
        name: 'Factorial',
        url: 'https://www.google.com/search?q=how+to+understand+recursion&oq=how+to+understand+recursion&aqs=chrome..69i57j0l5.2571j0j1&sourceid=chrome&ie=UTF-8#kpvalbx=1'
    },
    {
        name: 'Num Ways (Staircase) TODO',
        url: 'https://www.youtube.com/watch?v=5o-kdjv7FD0'
    },
    // {
    //     name: 
    //     url: 
    // },
    // {
    //     name: 
    //     url: 
    // },
    // {
    //     name: 
    //     url: 
    // },
    // {
    //     name: 
    //     url: 
    // },
    // {
    //     name: 
    //     url: 
    // },
    // {
    //     name: 
    //     url: 
    // },
    // {
    //     name: 
    //     url: 
    // },
]

function addListItemsToList(listId, challengesList) {
    var list = document.getElementById(listId);

    challengesList.forEach(challenge => {
        var listItem = document.createElement('li');
        listItem.setAttribute('class', 'collection-item');
        var link = document.createElement('a');
        link.innerHTML = challenge.name;
        link.setAttribute('href', challenge.url)
        listItem.appendChild(link);

        list.appendChild(listItem);
    })
};

addListItemsToList('arrayAndStringList', arrayAndStringChallenges);
addListItemsToList('recursionList', recursionChallenges);