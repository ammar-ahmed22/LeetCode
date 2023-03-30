import fs from "fs";
import path from "path";
import type { Options, Difficulty } from "./new";
import { extractBetweenSubstrings } from "./helpers/string";

const getDirectories = (sourceDir: string, opts?: {ignore?: string[]}) => {
  return fs.readdirSync(sourceDir, { withFileTypes: true })
    .filter(dirent => {
      if (opts?.ignore){
        return dirent.isDirectory() && !opts.ignore.includes(dirent.name)
      }
      return dirent.isDirectory()
    })
    .map(dirent => dirent.name);
}

const questionDirs = getDirectories(__dirname, {
  ignore: [".git", "helpers", "node_modules"]
});

const extractOptions = (file: string): Options | undefined => {
  const metadata = extractBetweenSubstrings(file, "<!--", "-->");
  if (metadata){
    return {
      name: extractBetweenSubstrings(metadata, "name: ", "\n") as string,
      url: extractBetweenSubstrings(metadata, "url: ", "\n") as string,
      languages: (extractBetweenSubstrings(metadata, "languages: ", "\n") as string).split(","),
      difficulty: extractBetweenSubstrings(metadata, "difficulty: ", "\n") as Difficulty
    }
  }

  return undefined;
}

const allQuestions: Options[] = questionDirs.map( dir => {
  const fp = path.join(__dirname, dir, "README.md");
  const file = fs.readFileSync(fp, { encoding: "utf-8" });
  const opts = extractOptions(file);
  if (opts) return opts;
}).filter( o => o !== undefined) as Options[]

const constructMarkdownTable = (headers: string[], questions: Options[]) => {
  let result = "|";
  headers.forEach((header, i, arr) => {
    result += `${header}|${i === arr.length - 1 ? "\n|" : ""}`
  })
  headers.forEach((header, i, arr) => {
    result += `:${"-".repeat(header.length - 2)}:|${i === arr.length - 1 ? "\n|" : ""}`
  })

  allQuestions.forEach((q, i, arr) => {
    let newRow = `[${q.name}](${q.url})|${q.difficulty}|${q.languages.join(",")}|[&#x1F4E4;](${q.name.split(" ").join("%20")})|${i !== arr.length - 1 ? "\n|" : ""}`;
    result += newRow;
  })

  return result;
}


const replaceMarkdownTable = (filePath: string, start: string, end: string, table: string) => {
  const regex = new RegExp(`${start}([\\s\\S]*?)${end}`, "g");
  const file = fs.readFileSync(filePath, { encoding: "utf-8" });
  const updated = file.replace(regex, `${start}\n${table}\n${end}`);
  fs.writeFileSync(filePath, updated);
}

const table = constructMarkdownTable(
  ["Problem", "Difficulty", "Language", "Solution"],
  allQuestions
);

replaceMarkdownTable(
  path.join(__dirname, "README.md"),
  "<!-- TABLE START -->",
  "<!-- TABLE END -->",
  table
);