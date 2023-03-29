## Question
Given two strings `s` and `t`, return `true` if `t` is an *anagram* of `s`, and `false` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Solution
```typescript
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const charCount : Record<string, number> = {};
    for (let c of s){
        if (c in charCount){
            charCount[c]++
        } else {
            charCount[c] = 1
        }
    }

    for (let c of t){
        if (!(c in charCount)) return false;
        charCount[c]--
    }

    for (let key in charCount){
        if (charCount[key] !== 0) return false;
    }

    return true
};
```

## Explanation
- Base case check: if strings are unequal length, false
- Create hash map of number of occurrences of each character in string `s`
- Loop through characters in string `t`
    * If character is not in hash map, return false (different characters)
    * Otherwise, decrement character count in hash map
- Loop through hash map
    * If number of occurrences is not zero, return false
        + If greater than zero, `t` has less of that character
        + If less than zero, `t` has more of that character
- Return true at the end

## Complexity
**Runtime**: O(n) <br />
**Space**: O(n)