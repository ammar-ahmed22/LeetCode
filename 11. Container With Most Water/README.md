<!-- 
  AUTOGENERATED: DO NOT EDIT
  name: 11. Container With Most Water
  difficulty: Medium
  languages: TypeScript
  url: https://leetcode.com/problems/container-with-most-water/
 -->
## Question
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and (`i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.

**Notice** that you may not slant the container.

## Solution
```typescript
function maxArea(height: number[]): number {
    let l = 0; 
    let r = height.length - 1;
    let maxA = 0;
    const area = (a: number, b: number, sep: number) => {
        return Math.min(a, b) * sep;
    }
    while (l < r){
        const left = height[l]
        const right = height[r];
        const A = area(left, right, r - l);
        maxA = Math.max(maxA, A);
        if (right > left){
            l++
        } else {
            r--
        }
    }

    return maxA
};
```

## Explanation
- Pointers on left and right
- Iterate while left is less than right
- Calculate water contained area on each iteration (min height * separation)
- Track max area
- Move one pointer on each iteration towards the larger one

## Complexity
**Runtime**: O(n)<br/>
**Space**: O(1)