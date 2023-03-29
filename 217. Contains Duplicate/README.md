## Question
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

## Solution
```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hash = {}
        
        for num in nums:
            if num not in hash:
                hash[num] = 1
            else:
                return True
        
        return False
```

## Explanation
- Create a hash map
- Iterate over the numbers
    * If num is not in the hash, add it with any value
    * If it is, duplicate found and return `true`
- Getting to the end, return `false`

## Complexity
**Runtime**: O(n) <br/>
**Space**: O(1)