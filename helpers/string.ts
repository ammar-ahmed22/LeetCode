export const extractBetweenSubstrings = (str: string, s1: string, s2: string) => {
  const regex = new RegExp(`${s1}([\\s\\S]*?)${s2}`);
  const match = str.match(regex);
  if (match && match[1]) return match[1]
  return undefined;
}

