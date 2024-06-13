/**
 * Sequence
 */
// const first = [8, 6, 8, 6, 7, 4, 7];
// // result 3 - [8,6,8], [6,8,6], [7,4,7]

// const second = [4, 5, 5, 7, 5, 5, 9];
// // result 1 - [5,7,5]

// const third = [3, 3, 2, 8, 7, 6, 5];
// // result 0

// const count = (data) => {
//   return data.reduce((total, item, index) => {
//     // console.log(item);
//     // console.log(index);
//     // console.log(item === data[index + 2]);
//     // console.log(!item === data[index + 1]);
//     const match = item === data[index + 2] && item !== data[index + 1];
//     if (match) return total + 1;
//     return total;
//   }, 0);
// };

// console.log(count(first));
// console.log(count(second));
// console.log(count(third));

/**
 * Even or odd
 */
// sum(56) - ODD
// 5 + 6 = 11
// 11 % 2 = 1

// sum(745) - EVEN
// 7 + 4 + 5 = 16
// 16 % 2 = 0

// function sum(number) {
//   //const items = [...arguments(number + "")]
//   const items = number.toString().split("");
//   const result = items.reduce((total, item) => {
//     return total + Number(item);
//   }, 0);
//   return result % 2 === 0 ? "EVEN" : "ODD";
// }

// console.log(sum(56));
// console.log(sum(745));

/**
 * Count repeating letters
 */
function countLetters(str) {
  let tempArr = str.split("");
  let letters = [];
  let count = 1;

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      let value = `${count}${tempArr[i]}`;
      letters = [...letters, value];
      count = 1;
    }
  }
  return letters.join();
}

console.log(countLetters("ffffeerttttooo"));

/**
 * Longest word
 */
function longestWord(str) {
  let words = str.split(" ");
  let longest = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }

  return longest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
console.log(
  longestWord("What if we try a super-long word such as otorhinolaryngology")
);

/**
 * Longest words
 */
function longestWords(str) {
  let words = str.split(" ");
  let size = 0;
  let max = [" "];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length;
      if (max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i]);
      } else {
        max = [...max, words[i]];
      }
    }
  }
  return [...max];
}

console.log(longestWord("I woke up early today"));
console.log(longestWord("I went straight to the beach"));

/**
 * Counting letters
 */

function countLetters(str) {
  let tempArr = str.split(" ");
  tempArr = tempArr.map((item) => {
    let tempItem = item.toLowerCase().split("");
    return tempItem.reduce(
      (acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        if (acc[curr] > acc.max) {
          acc.max = acc[curr];
        }
        return acc;
      },
      {
        max: 1,
        word: item,
      }
    );
  });

  let amount = 1;
  let word = "";
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i].max > amount) {
      amount = tempArr[i].max;
      word = tempArr[i].word;
    }
  }
  if (amount > 1) {
    return word;
  }
  return -1;
}

console.log(countLetters("Javascript is the greatest programming language"));

/**
 * Repeated Numbers
 */

function testRepeat(arr) {
  let tempNumbers = arr.reduce((acc, curr, index) => {
    acc[curr] = acc[curr]
      ? { ...acc[curr], amount: acc[curr]["amount"] + 1 }
      : { amount: 1, index };
    return acc;
  }, {});
  return tempNumbers;
}

console.log(testRepeat([5, 2, 2, 1, 5]));
// return 5

console.log(testRepeat([6, 5, 5, 10, 10, 10, 10]));
// return 10

console.log(testRepeat([3, 4, 1, 6, 10]));
// return -1

/**
 * Triangle
 */

for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}

/**
 * FizzBuzz
 */

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

//   // if (i % 15 === 0) console.log("FizzBuzz");
//   // else if (i % 3 === 0) console.log("Fizz");
//   // else if (i % 5 === 0) console.log("Buzz");
//   // else console.log(i);
// }

// moze i ovako
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

/**
 * Chessboard
 */
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

/**
 * Minimum
 */
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/**
 * Recursion
 */
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

/**
 * Bean counting
 */
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

/**
 * Fibonacci Sequence
 */
function fibunacci(index) {
  if (index <= 1) {
    return index;
  } else {
    return fibunacci(index - 1) + fibunacci(index - 2);
  }
}

console.log(fibunacci(8)); // 21
console.log(fibunacci(-1)); // -1

/**
 * Add to number
 */

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(3));

function addUpToFaster(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpToFaster(90));

/**
 * Reverse array
 */
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/**
 * Deep comparasion
 */
function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

/**
 * Flattering
 */

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]

/**
 * Yoour own loop
 */
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

/**
 * Everything
 */
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some((element) => !predicate(element));
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

/**
 * A vector type: page 108
 */
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

/**
 * Groups
 */
class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter((v) => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

/**
 * Iterable groups
 */
class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter((v) => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

class GroupIterator {
  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#members.length) {
      return { done: true };
    } else {
      let result = { value: this.#members[this.#position], done: false };
      this.#position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

/**
 * Borrowing a method
 */

let map = { one: true, two: true, hasOwnProperty: true };

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
