## Solution
```typescript
function twoSum(nums: number[], target: number): number[] {
    const dict: Record<number, number> = {}
    // Num-index map
    for (let i = 0; i < nums.length; i++){
        dict[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++){
        const num = nums[i];
        let t = target - num;
        if (t in dict && dict[t] !== i){
            return [i, dict[t]]
        }
    }


    return []
};
```

## Explanation
- Create a hash map, mapping all nums in the array to their indices
- Loop through the numbers and create the subtarget
    * If target is 9, and `nums[i] = 4`, subtarget = 9 - 4 = 5
    * If we find 5 in the nums array, two sum is found
- If subtarget is found in hash map, return the two indices

## Complexity
**Runtime**: O(n) <br />
**Space**: O(n)