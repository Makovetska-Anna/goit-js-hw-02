const findLongestWord = function (string) {
  let word = string.split(" ");
  let biggestWord = word[0];

  for (let i = 0; i < word.length; i += 1) {
    if (word[i].length > biggestWord.length) {
      biggestWord = word[i];
    }
  }
  return biggestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
