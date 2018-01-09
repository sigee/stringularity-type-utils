'use strict';
var errArray = ['error'],
    warnArray = ['warn'],
    alwaysArray = ['error', 'always'],
    neverArray = ['error', 'never'],
    idExceptionsArray = [
        'x',
        'i',
        'e',
        'do',
        'fs',
        'id',
        'ex',
        'EC',
        'QA'
    ];

module.exports = {
    "parserOptions": {
        "ecmaVersion": 7
    },
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "array-bracket-newline": ["error", "consistent"],
        "array-bracket-spacing": neverArray,
        "array-element-newline": alwaysArray,
        "brace-style": ["error", "1tbs"],
        "camelcase": errArray,
        "comma-dangle": errArray,
        "comma-spacing": ["error", {"before": false, "after": true}],
        "comma-style": ["error", "last"],
        "complexity": ["error", 20],
        "computed-property-spacing": errArray,
        "curly": ["error", "all"],
        "eol-last": errArray,
        "for-direction": errArray,
        "function-paren-newline": neverArray,
        "func-call-spacing": neverArray,
        "func-names": alwaysArray,
        "indent": ["error", 4],
        "max-params": ["error", 4],
        "max-statements": ["error", 12],
        "id-length": ["error", {"min": 3, "exceptions": idExceptionsArray}],
        "indent": errArray,
        "no-alert": errArray,
        "no-cond-assign": alwaysArray,
        "no-console": errArray,
        "no-dupe-keys": errArray,
        "no-empty": errArray,
        "no-eval": errArray,
        "no-eq-null": errArray,
        "no-extra-parens": ["error", "all", {"nestedBinaryExpressions": false}],
        "no-inner-declarations": ["error", "both"],
        "no-irregular-whitespace": ["error", { "skipComments": true }],
        "no-loop-func": errArray,
        "no-octal": errArray,
        "no-octal-escape": errArray,
        "no-param-reassign": errArray,
        "no-proto": errArray,
        "no-return-assign": errArray,
        "no-unused-expressions": errArray,
        "no-use-before-define": errArray,
        "no-warning-comments": warnArray,
        "no-with": errArray,
        "one-var": alwaysArray,
        "one-var-declaration-per-line": alwaysArray,
        
        "operator-linebreak": ["error", "after"],
        "prefer-const": errArray,
        "quotes": ["error", "single"],
        "semi": alwaysArray,
        "semi-spacing": errArray,
        "space-infix-ops": errArray,
        "space-in-parens": neverArray,
        "vars-on-top": errArray,
        
    }
};