export const PASSWORD_REGEX = {
  FULL: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
  LOWERCASE: /[a-z]/,
  UPPERCASE: /[A-Z]/,
  SYMBOL: /[!@#$%^&*()_+=\-\[\]{}|\\;:",./<>?]/,
  NUMBER: /[0-9]/,
  LENGTH: /^.{8,}$/,
} as const;
