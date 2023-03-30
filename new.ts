import fs from "fs";
import path from "path";
import commandLineArgs, { OptionDefinition } from "command-line-args";
import chalk from "chalk";

const optionsDefitions : OptionDefinition[] = [
  {
    name: "name",
    alias: "n",
    type: String,
  },
  {
    name: "url",
    alias: "u",
    type: String
  },
  {
    name: "languages",
    alias: "l",
    type: String,
    multiple: true
  },
  {
    name: "help",
    alias: "h",
    type: Boolean
  },
  {
    name: "difficulty",
    alias: "d",
    type: String
  }
];


export type Options = {
  name: string,
  url: string,
  languages: string[],
  difficulty: "Easy" | "Medium" | "Hard"
}
export type Difficulty = Options["difficulty"];

const helpText = `
  Required parameters:

  ${chalk.whiteBright("--name       || -n")} ${chalk.underline("string")}                 The name of the LeetCode Question e.g. 1. Two Sum
  ${chalk.whiteBright("--url        || -u")} ${chalk.underline("string")}                 The url to the LeetCode Question.
  ${chalk.whiteBright("--languages  || -l")} ${chalk.underline("string[]")}               The languages for which a solution will be provided.
  ${chalk.whiteBright("--difficulty || -d")} ${chalk.underline("Easy | Medium | Hard")}   The difficulty of the question.
`

const options = commandLineArgs(optionsDefitions);
if (options.help){
  console.log(helpText)
  process.exit(0)
}

if (Object.keys(options).length < 4) {
  console.log(chalk.red("All parameters are required! Use --help or -h to see all required parameters."));
  process.exit(0);
}

if (!["Easy", "Medium", "Hard"].includes(options.difficulty)){
  console.log(chalk.red("Difficulty must be: Easy, Medium or Hard"));
  process.exit(0);
}

const opts = options as Options;
if (fs.existsSync(path.resolve(__dirname, opts.name))){
  console.log(chalk.red(`Question: '${opts.name}' already exists!`));
  process.exit(0)
}

fs.mkdirSync(path.resolve(__dirname, opts.name));
const template = fs.readFileSync(path.join(__dirname, "assets", "template.md"), { encoding: "utf-8" });
let parsedTemplate = template;
["name", "difficulty", "languages", "url"].forEach( item => {
  let i = item as keyof Options;
  parsedTemplate = parsedTemplate.replace(`\$\{\{${i}\}\}`, options[item]);
})

fs.writeFileSync(path.resolve(__dirname, opts.name, "README.md"), parsedTemplate);

