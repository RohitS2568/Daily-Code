//1.------------Find Anagram 
function findAnagrams(s, p) {
    const result = [];
    const targetCount = {};
    let left = 0, count = 0;

    for (const char of p) {
        targetCount[char] = (targetCount[char] || 0) + 1;
    }

    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        if (targetCount[rightChar] !== undefined) {
            targetCount[rightChar]--;
            if (targetCount[rightChar] === 0) {
                count++;
            }
        }

        while (count === Object.keys(targetCount).length) {
            if (right - left + 1 === p.length) {
                result.push(left);
            }
            const leftChar = s[left];
            if (targetCount[leftChar] !== undefined) {
                targetCount[leftChar]++;
                if (targetCount[leftChar] > 0) {
                    count--;
                }
            }
            left++;
        }
    }

    return result;
}
console.log(findAnagrams("cbaebabacd", "abc"));


//2.-------------Group Anagrams
  function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
  }
  console.log(groupAnagrams("rohit"));
  //output : [ [ 'r' ], [ 'o' ], [ 'h' ], [ 'i' ], [ 't' ] ]


//3.-------------Anagram Have or Not
function areAnagrams(str1, str2) {
    // Helper function to clean and sort the string
    function cleanString(str) {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }

    // Clean and sort both strings
    const cleanStr1 = cleanString(str1);
    const cleanStr2 = cleanString(str2);

    // Compare the cleaned and sorted strings
    return cleanStr1 === cleanStr2;
}
// Test cases
let a = "rohit";
let b = "hoitr";
console.log(areAnagrams(a, b)); // true

a = "abc";
b = "xyz";
console.log(areAnagrams(a, b)); // false


//4. Write code Get all Anagram Value
function getAnagrams(str) {
    if (str.length <= 1) {
        return [str];
    }

    let anagrams = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        let remainingAnagrams = getAnagrams(remainingChars);

        for (let anagram of remainingAnagrams) {
            anagrams.push(char + anagram);
        }
    }

    return anagrams;
}

// Example usage:
let myString = "abc";
let anagrams = getAnagrams(myString);
console.log(anagrams);
//output ["abc", "acb", "bac", "bca", "cab", "cba"]

