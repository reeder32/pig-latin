Describe: startsWithVowel()

Test: "Does the word begin with a vowel"
Code: startsWithVowel("apple")
Expected Output: true

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move all consecutive consonants to the end of the word and add 'ay'"
Code: pigLatin("people");
Expected Output: "eoplepay"

Test: "When first consonants include 'qu' move the 'u' along with the 'q' add 'ay'"
Code: pigLatin("quick");
Expected Output: "ickquay"

Describe: translateToPigLatin()

Test: "Multiple words should return pig latin for every word"
Code: translateToPigLatin("this is a string of words")
Expected Output: "isthay isway away ingstray ofway ordsway"


Describe: justWords()

Test: "replacing non words with REPLACE"
Code: justWords("this is a string of words!")
Expected Output: "this is a string of ordsREPLACEway"


