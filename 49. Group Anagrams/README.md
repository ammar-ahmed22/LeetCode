<!-- 
    AUTOGENERATED: DO NOT EDIT
    name: 49. Group Anagrams
    difficulty: Medium
    languages: Python
    url: https://leetcode.com/problems/group-anagrams/
 -->
## Question
Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Solution
```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        stringValues = {}
        for string in strs:
            tot = 0
            for char in string:
                tot += ord(char)
            if tot in stringValues:
                stringValues[tot].append(string)
            else:
                stringValues[tot] = [string]
        
        result = []
        for val in stringValues:
            result.append(stringValues[val])
        return result
```

## Explanation
- Initialize a hash map for the grouped anagrams
- Iterate over each string
- Calculate the character sum of each string
    * Each character has a numeric value (found using `ord` in Python)
- If the character sum is not in the has, add it to the hash with a value of an array with the first value being the string
- If the hash contains the same character sum, it is an anagram
    * Add to the array
- Iterate over the hash map to create the 2D result array

## Complexity
**Runtime**: O(n * m) <br/>
>> n being the length of the input array, m being the length of the longest string in the input <br />
**Space**: O(n)