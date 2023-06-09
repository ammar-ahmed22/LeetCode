<!-- 
  AUTOGENERATED: DO NOT EDIT
  name: 150. Evaluate Reverse Polish Notation
  difficulty: Medium
  languages: TypeScript
  url: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 -->
## Question
You are given an array of strings tokens that represents an arithmetic expression in a [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).

Evaluate the expression. Return an integer that represents the value of the expression.

**Note** that:

- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a 32-bit integer.

## Solution
```typescript
function evalRPN(tokens: string[]): number {
    const stack = [];
    const evaluate = (stack: any[], token: string) => {
        const a = stack.pop()
        const b = stack.pop()
        switch(token){
            case "+":
                stack.push(a + b)
                break;
            case "-":
                stack.push(b - a)
                break;
            case "*":
                stack.push(a * b)
                break;
            case "/":
                stack.push((b / a) >> 0)
                break;
        }
    }

    const operators = ["+", "*", "-", "/"];
    for (let c of tokens){
        if (operators.includes(c)){
            evaluate(stack, c)
        } else {
            stack.push(parseInt(c))
        }
    }

    return stack[0]
};
```

## Explanation
- Create a stack
- Iterate over the characters
- If the character is an operator
  * Pop the 2 elements from the stack and add the evaluation to the stack
- Else
  * Add the number to the stack

> The `(b / a) >> 0` in the `evaluate` function is used to conduct correct integer division in JavaScript. Using `Math.floor` does not handle negative numbers correctly

## Complexity
**Runtime**: O(n)<br/>
**Space**: O(n)