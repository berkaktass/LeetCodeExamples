//Example 1:

//Input: x = 121
//Output: true
//Explanation: 121 reads as 121 from left to right and from right to left.

//Example 2:

//Input: x = -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Solution:

/**
 * @param {number} x
 * @return {boolean}
 */
let x=121;
let y=0;
y = Number(String(x).split('').reverse().join(''));
let isTrue=true;

var isPalindrome = function (x) {
    if(String(x) === String(y)){
        return (isTrue);
    }else {
        return (!isTrue);
    }
};

console.log(isPalindrome(x));
