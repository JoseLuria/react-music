export const handleFormatText = (target) => {
  const textWithoutSpaces = target.value.replace(" ", "_");
  const textWithoutSpecialCharacters = textWithoutSpaces.replace(/,|'|"|´|\./g, "");
  const textInLowecase = textWithoutSpecialCharacters.toLowerCase();

  return textInLowecase;
};
