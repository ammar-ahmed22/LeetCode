## Question
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

## Solution
```typescript
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    const [ base ] = strs;
    let prefix = base.slice(0, 0);
    for (let i = 0; i <= base.length; i++){
        prefix = base.slice(0, i);
        for (let str of strs){
            if (i > str.length || str.slice(0, i) !== prefix){
                return prefix.slice(0, -1)
            }    
        }
    }

    return prefix
    
};
```

## Explanation
- Check base case, empty array return `""`
- Initialize the result
- Grab the first element in the array as the base
- Iterate over the number of characters in the first element
    * On each iteration, slice the base string to get the new longest prefix
    * Iterate over all elements in the array
    * If the string is larger than the current iteration or the prefix is not the same, return the prefix
        + Remove the last letter as it is the next prefix
- Return the prefix if we get to the end of the loop

## Complexity
**Runtime**: O(n * m) <br />
>> n is length of the `strs` array, m is the length of the first string in `strs`
**Space**: O(1)