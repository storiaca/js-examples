/**
 * 
 * Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 * 
 */
// function getCount(str) {
//   let letters = str.split("");

//   let vovels = letters.filter((letter) => {
//     return (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     );
//   });
//   return vovels.length;
// }

//console.log(getCount("abracadabra"));

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// function getCount(str) {
//   var vowelsCount = 0;
//   str.split("").forEach(function(x){
//     if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//       vowelsCount += 1;
//     }
//   });
//   return vowelsCount;
// }

/***
 * Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
 * 
 */
// function howMuchILoveYou(nbPetals) {
//   let phrases = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];

//   return phrases[(nbPetals - 1) % phrases.length];
// }

// console.log(howMuchILoveYou(10));

// function howMuchILoveYou(nbPetals) {
//   let phrase = {
//     0: "not at all",
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly"
//   }
//   return phrase[nbPetals%6]
// }

// function howMuchILoveYou(nbPetals) {
//   switch ((nbPetals - 1) % 6) {
//       case 1:
//           return "a little";
//       case 2:
//           return "a lot";
//       case 3:
//           return "passionately";
//       case 4:
//           return "madly";
//       case 5:
//           return "not at all";
//       default:
//           return "I love you";
//   }
// }

// function howMuchILoveYou(nbPetals) {
//   let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
//   return petals[(nbPetals-1) % 6];
// }

/**
 * Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
 * 
 */
function strCount(str, letter) {
  //code here
  if (str.length === 0) return 0;

  let letters = str.split("");

  let count = 0;

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letter) count++;
  }

  // letters.forEach((l) => {
  //   if (l === letter) {
  //     count++;
  //   }
  // });

  return count;
}

console.log(strCount("Hello", "o")); // 1
console.log(strCount("", "l")); // 0

// function strCount(str, letter){
//   return str.split(letter).length-1
// }

// function strCount(str, letter){
//   return str.split('').filter(c => c == letter).length;
// }

// function strCount(str, letter){

//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter)
//       count++;
//   }

//   return count;

// }

/**
 * String challenge
 */

function stringChallenge(str) {
  // let wordsClean = str.replace(/[^a-zA-Z ]/g, '').split('')
  let wordsClean = str
    .replace(/[^\w\s\']/g, " ")
    .replace(/\s+/g, " ")
    .split(" ");

  for (let i = 1; i < wordsClean.length; i++) {
    wordsClean[i] =
      wordsClean[i].charAt(0).toUpperCase() +
      wordsClean[i].slice(1).toLowerCase();
  }

  wordsClean.reverse();
  let w = "newaddedstring";

  let words = wordsClean.join("");
  //console.log(typeof words);
  let last = words.concat(":", w);
  return last;
}

console.log(stringChallenge("cats AND*Dogs-are Awesome!")); // ['cats', 'and', 'dogs', 'are', 'awesome'];
console.log(stringChallenge("a b c d-e-f%g"));
