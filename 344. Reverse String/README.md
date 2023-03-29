## Question
Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with `O(1)` extra memory.

## Solution
```typescript
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const swap = (arr: any[], i: number, j: number) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let l = 0;
    let r = s.length - 1;
    while(l < r){
        swap(s, l, r);
        l++
        r--
    }
    
};
```

## Explanation
- Helper function to swap values in an array
- Iterate from left and right of array
- Swap left and right

## Complexity
**Runtime**: O(n) <br />
**Space**: O(1)