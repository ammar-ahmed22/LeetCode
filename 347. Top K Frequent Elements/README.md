## Question
Given an integer array `nums` and an integer `k`, return the `k` *most frequent elements*. You may return the answer in **any order**.

## Solution
```typescript
function topKFrequent(nums: number[], k: number): number[] {
    const frequency : Record<number, number> = {};
    // Find the frequency of each number
    for (let num of nums){
        if (num in frequency){
            frequency[num]++
        } else {
            frequency[num] = 1
        }
    }

    // Array mapping the frequencies in ascending order
    // Filled with array's in case there are multiple numbers with
    // the same frequency
    const count: number[][] = new Array(nums.length + 1);
    for (let i = 0; i < count.length; i++){
        count[i] = []
    }

    for (let num in frequency){
        count[frequency[num]].push(parseInt(num))
    }

    // Populate result array by iterating backwards over count and
    // adding to result
    // If result hits length k, return
    let result = [];
    for (let i = count.length - 1; i >= 0; i--){
        if (result.length === k) return result;
        if (!count[i].length) continue;
        count[i].forEach( val => {
            if (result.length === k) return;
            result.push(val);
        })
    }
};
```

## Explanation
- Calculate the frequency of all nums using a hash map
- Create an array of arrays of integers to store the numbers in ascending order of frequency
- Add number to the count array indexed by their frequency
    * If `1` has a frequency of `3`, `1` would be added to the array at index `3`
- Iterate over the count array backwards
    * If the array at the current iteration is empty, continue
    * Otherwise, add each element in the array to the result
        + Check each time if the result hits length k, if it does, return result


## Complexity
**Runtime**: O(n) <br/>
> We only iterate over the input array once, multiple times. No nested loops. 

**Space**: O(n)