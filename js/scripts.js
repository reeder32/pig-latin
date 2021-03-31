// Uitility logic
const vowels = ["a", "e", "i", "o", "u"];

function justWords(text) {
  const cleanText = text.replace(/[\|&;\$%@"<>\(\)\+!.#]/g, "");
  return cleanText.split(" ");
}
function startsWithVowel(text) {
  let firstLetter = text[0];
  if (vowels.includes(firstLetter)) {
    return true;
  } else {
    return false;
  }
}

function consanantWord(text) {
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      let endText;
      let startText;
      if (text[i] === "u" && text[i - 1] === "q") {
        startText = text.slice(i + 1, text.length);
        endText = text.slice(0, i + 1);
      } else {
        startText = text.slice(i, text.length);
        endText = text.slice(0, i);
      }
      return startText + endText + "ay";
    }
  }
  return text;
}

// Business logic
function pigLatin(text) {
  let pigLatinWord;
  if (startsWithVowel(text)) {
    pigLatinWord = text + "way";
  } else {
    pigLatinWord = consanantWord(text);
  }
  return pigLatinWord;
}

function translateToPigLatin(sentence) {
  const words = justWords(sentence);
  let translatedString = "";
  words.forEach(function (word, index) {
    if (index === sentence.length - 1) {
      translatedString = translatedString.concat(pigLatin(word) + ".");
    } else {
      translatedString = translatedString.concat(pigLatin(word) + " ");
    }
  });
  return translatedString;
}

const sentence = translateToPigLatin("this is a string of words that are slow and not quick but squeaky");
console.log(sentence);