function validPal(s) {
    let i = 0;
    let j = s.length -1
    while (i < j) {
        if (s[i] == s[j]) {
            i ++;
            j --;
        } else {
            return false
        }
        return true
    }
}

console.log(validPal('racecar')) // true
console.log(validPal('raccar')) // true
console.log(validPal('hello')) // false

function longestPal(s) {
    let startIndex = 0;
    let maxLength = 1;

    // Helper function
    function expandAroundMiddle(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPalLength = right - left + 1;
            if (currentPalLength > maxLength) {
                maxLength = currentPalLength;
                startIndex = left;
            }
            left -= 1
            right +=1
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i-1, i+1);
        expandAroundMiddle(i, i+1);
    }

    return s.slice(startIndex, startIndex + maxLength);
}

console.log(longestPal('abba')) // aba
console.log(longestPal('bba'))  // bb
console.log(longestPal('j'))    // j
console.log(longestPal('dkwofjjfo')) // ofjjfo

function lengthOfLongestSubstring(s){

    let windowCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i];

        if (windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1;
        }

        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb')) //3
console.log(lengthOfLongestSubstring('bbbbb'))    //1
console.log(lengthOfLongestSubstring('pwwkew'))   //3 wke
console.log(lengthOfLongestSubstring('bbbbyuhb'))  //4




