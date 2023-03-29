## Question
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a ***palindrome***, or `false` otherwise.

## Solution
```typescript
function isPalindrome(s: string): boolean {
    const isAlphaNumeric = (s: string): boolean => {
        return /^[a-z0-9]+$/i.test(s)
    }

    let l = 0;
    let r = s.length - 1;
    while (l < r){
        if (!isAlphaNumeric(s[l])){
            l++
            continue;
        }

        if (!isAlphaNumeric(s[r])){
            r--
            continue;
        }

        if (s[r].toLowerCase() !== s[l].toLowerCase()) return false
        l++
        r--
    }

    return true
};
```

## Explanation
- Create a function to check if string is alpha numeric
    * Using RegEx
- Initialize left and right pointers
- If left pointer is not alphanumeric, increment and move to next iteration
- If right pointer is not alphanumeric, decrement and move to next iteration
- If both pointers are alphanumeric, check if they are equal (palindrome should be equal)
    * Return false if not equal
- Increment and decrement left and right pointers
- If loop end is reached, it is valid palindrome

## Complexity
**Runtime**: O(n) <br />
**Space**: O(1)