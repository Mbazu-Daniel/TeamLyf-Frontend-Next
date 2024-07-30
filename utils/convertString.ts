export function convertStringToParseableUrl(string: string) {
  return string.replace(/ /g, "-").toLowerCase();
}

export function convertStringToDisplayable(string: string) {
  return string.replace(/-/g, " ");
}
