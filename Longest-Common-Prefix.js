// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

let strs = ["flower","flow","flight"];


var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    
    strs.sort();
  
    const strLastIndex = strs.length - 1;
    if(strs[0] === strs[strLastIndex]) return strs[0];
    
    let prefix = "";
    for(let i=0; i < strs[0].length; i++) {
      if(strs[0][i] === strs[strLastIndex][i]) {
        prefix += strs[0][i];
      } else {
        return prefix;
      }
    }
    
    return prefix;
};

console.log(longestCommonPrefix(strs))
