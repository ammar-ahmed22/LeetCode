## Solution
```typescript
function fizzBuzz(n: number): string[] {
  const result: string[] = []
  for (let i = 1; i <= n; i++){
      if (i % 3 === 0 && i % 5 === 0){
          result.push("FizzBuzz");
      } else if (i % 3 === 0){
          result.push("Fizz");
      } else if (i % 5 === 0){
          result.push("Buzz");
      } else {
          result.push(i.toString());
      }
  }

  return result;
};
```
## Explanation
- Quite straightforward using the modulo operator. If the remainder of dividing by 3 and 5 is zero, add FizzBuzz, if dividing by 3 remainder is zero add Fizz and dividing by 5 remainder is zero, add Buzz. Otherwise, add index stringified.
- Order of if statements is important 
- Important to loop starting from 1.

## Complexity
**Runtime**: O(n) <br />
**Space**: O(n)