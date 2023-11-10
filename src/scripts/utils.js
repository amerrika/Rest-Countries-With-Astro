export const formatList = function (arr) {
  return new Intl.ListFormat(en, {
    style: "short",
    type: "conjunction",
  }).format(arr);
};
