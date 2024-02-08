const toCapitalize = (inputString: string | null | undefined) => {
  if (!inputString) return "";
  return inputString.slice(0, 1).toUpperCase() + inputString.slice(1);
};

export { toCapitalize };
