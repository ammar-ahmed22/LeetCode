# LeetCode Solutions
Tracking my LeetCode solutions with explanations.


## Problems
<!-- TABLE START -->
|Problem|Difficulty|Language|Solution|
|:-----:|:--------:|:------:|:------:|
|[1. Two Sum](https://leetcode.com/problems/two-sum/)|Easy|TypeScript|[&#x1F4E4;](1.%20Two%20Sum)|
|[11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)|Medium|TypeScript|[&#x1F4E4;](11.%20Container%20With%20Most%20Water)|
|[121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)|Easy|TypeScript|[&#x1F4E4;](121.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock)|
|[125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)|Easy|TypeScript|[&#x1F4E4;](125.%20Valid%20Palindrome)|
|[14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)|Easy|TypeScript|[&#x1F4E4;](14.%20Longest%20Common%20Prefix)|
|[15. 3Sum](https://leetcode.com/problems/3sum/)|Medium|Python|[&#x1F4E4;](15.%203Sum)|
|[167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)|Medium|TypeScript|[&#x1F4E4;](167.%20Two%20Sum%20II%20-%20Input%20Array%20Is%20Sorted)|
|[191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)|Easy|TypeScript|[&#x1F4E4;](191.%20Number%20of%201%20Bits)|
|[217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)|Easy|Python|[&#x1F4E4;](217.%20Contains%20Duplicate)|
|[242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)|Easy|TypeScript|[&#x1F4E4;](242.%20Valid%20Anagram)|
|[303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)|Easy|TypeScript|[&#x1F4E4;](303.%20Range%20Sum%20Query%20-%20Immutable)|
|[326. Power of Three](https://leetcode.com/problems/power-of-three/)|Easy|TypeScript|[&#x1F4E4;](326.%20Power%20of%20Three)|
|[344. Reverse String](https://leetcode.com/problems/reverse-string/)|Easy|TypeScript|[&#x1F4E4;](344.%20Reverse%20String)|
|[347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)|Medium|TypeScript|[&#x1F4E4;](347.%20Top%20K%20Frequent%20Elements)|
|[412. Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)|Easy|TypeScript|[&#x1F4E4;](412.%20Fizz%20Buzz)|
|[49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)|Medium|Python|[&#x1F4E4;](49.%20Group%20Anagrams)|
|[567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)|Medium|TypeScript|[&#x1F4E4;](567.%20Permutation%20in%20String)|
|[6. ZigZag Conversion](https://leetcode.com/problems/zigzag-conversion/)|Medium|TypeScript, Python|[&#x1F4E4;](6.%20ZigZag%20Conversion)|
<!-- TABLE END -->

## Features
- Custom TypeScript tooling to add new questions to the repository using a markdown template
- GitHub action to update the README table below on pushes to `main`

### How does it work?
#### Creating Questions
**Run**
```bash
yarn new --name <name of question> --url <leetcode url> --langauges <languages for solution> --difficulty <Easy | Medium | Hard> 
```
- Command line arguments are parsed using [command-line-args](https://github.com/75lb/command-line-args#readme)
- New directory created with `--name`
- README.md added to directory with content pulled from `assets/template.md`
  * Metadata at the top of `template.md` is updated using the command line arguments
  * Used for updating README table (below)

#### Updating README table
**Run**
```bash
yarn readme
```
- All directory names are pulled ignoring non-question directory (e.g. helpers, assets, .git etc.)
- Each README inside question directory contains autogenerated metadata created when using `yarn new`
- Metadata is pulled for each question
- Markdown table is constructed through string parsing
- README is updated by replacing the table with the new table
  * Markdown comments used to determine where to insert new table