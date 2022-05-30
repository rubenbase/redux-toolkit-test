export const getRegexNumberFromString = (str: string) => {
  return str.replace(/\D/g, '')
}
