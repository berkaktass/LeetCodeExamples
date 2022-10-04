// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.


var romanToInt = function(s) {

let roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
 let res = 0;
 for(let i= 0; i < s.length; i++) {
     if(i != 0) {
         if(s[i-1] == "I" && (s[i] == "V" || s[i] == "X")) {
             res+= roman[s[i]] - 2;
         } else if(s[i-1] == "X" && (s[i] == "L" || s[i] == "C")) {
             res+= roman[s[i]] - 20;
         } else if(s[i-1] == "C" && (s[i] == "D" || s[i] == "M")) {
             res+= roman[s[i]] - 200;
         } else {
             res+= roman[s[i]];
         }
     } else {
         res+= roman[s[i]];
     }
 }
 return res;
};


console.log(romanToInt("MCMXCIV"));
