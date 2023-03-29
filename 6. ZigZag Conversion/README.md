## Question
The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:
```
string convert(string s, int numRows);
```

## Solution
```typescript
function convert(s: string, numRows: number): string {
    let result = "";
    if (numRows === 1) return s;
    const rows: string[] = new Array(Math.min(s.length, numRows)).fill("");

    let currRow = 0;
    let goingDown = false;
    
    for (let c of s){
        rows[currRow] += c;
        if (currRow === 0 || currRow === numRows - 1){
            goingDown = !goingDown;
        }
        currRow += goingDown ? 1 : -1;
    }

    for (let row of rows){
        result += row;
    }

    return result;
};
```

```python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        rows = ["" for _ in range(min(len(s), numRows))]
        
        curRow = 0
        goingDown = False
        
        for char in s:
            rows[curRow] += char
            
            if (curRow == 0 or curRow == numRows - 1):
                goingDown = not goingDown
            
            curRow += 1 if goingDown else -1
        
        result = ""
        
        for row in rows:
            result += row
        
        return result
```

## Explanation
- Base case: If `numRows === 1` return the string
- Initialize an array of empty strings with a length that is the minimum between the length of the string or number of rows
    * If the string is smaller than the number of rows we will only have a vertical line to parse
- Initialize variables for the current row to evaluate and a boolean to track whether we are going down or up
    * Start at the current row = 0 (top-left)
    * Going down is false because it will be switched on the first iteration
- Iterate over each character in the string
- Add the character to the string in corresponding string in the rows array
- If the current row is zero or 1 less than the number of rows, flip the going down variable
    * When we get to the bottom, we want to start going up
    * When we get to the top, we want to start going down
- Increment or decrement the current row based on whether we are going down or up
- Add all the row strings together for the result

## Complexity
**Runtime**: O(n) <br />
**Space**: O(n)