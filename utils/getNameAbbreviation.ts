export const getNameAbbreviation = (str: string) => {
  if (!str) return;
  return str
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};
