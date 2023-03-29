## Question
Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

## Solution
```typescript
function hammingWeight(n: number): number {
    const bin = (n >>> 0).toString(2); // convert to binary string
    let count = 0;
    for (let c of bin){
        if (c === "1") count++
    }
    
    return count;
};
```

## Complexity
**Runtime**: O(n) <br />
**Space**: O(1)