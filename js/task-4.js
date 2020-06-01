const formatString = function (string) {
  if (string.length > 40) {
    let line = string.slice(0, 40);
    line += "...";
    return line;
  }

  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
