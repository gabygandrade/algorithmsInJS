module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "es6": true,
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "rules": {
        // indentation
        "indent": [ 2, 4 ],
        // strings
        "quotes": [ 1, "double", "avoid-escape" ],
        // code arrangement matter
        "no-use-before-define": [ 2, { "functions": false } ],
    }
}