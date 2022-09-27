export const arrayfy = (input: any): Array<any> => {
  return Object.keys(input).map((key) => input[key]);
}