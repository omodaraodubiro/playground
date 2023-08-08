function capital(sentence) {
  const words = sentence.split(" ");
  const capital = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capital.join(" ");
}

const sentences = "my name is odubiro omodara";
const capitalize = capital(sentences);
console.log(capitalize);

function findWord(sentence) {
  const words = sentence.split(" ");
  let longestWords = "";

  words.forEach((word) => {
    if (word.length > longestWords.length) {
      longestWords = word;
    }
  });

  return longestWords;
}

const inputSentence =
  "Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string";
const longestWord = findWord(inputSentence);
console.log(longestWord);

function prime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const inputNumber = 17;
if (prime(inputNumber)) {
  console.log(`${inputNumber} is a prime number.`);
} else {
  console.log(`${inputNumber} is not a prime number.`);
}

function getTheType(input) {
  return typeof input;
}

const value1 = 60;
const value2 = "omodara";
const value3 = false;

console.log(getTheType(value1));
console.log(getTheType(value2));
console.log(getTheType(value3));

function findSecondLowestAndGreatest(numbers) {
  if (numbers.length < 2) {
    return "Array should have at least two numbers.";
  }

  const sortedNumbers = numbers.sort((a, b) => a - b);
  const secondLowest = sortedNumbers[1];
  const secondGreatest = sortedNumbers[sortedNumbers.length - 2];

  return {
    secondLowest,
    secondGreatest,
  };
}

const numberArray = [50, 3, 30, 9, 17];
const result = findSecondLowestAndGreatest(numberArray);

console.log(`Second Lowest is: ${result.secondLowest}`);
console.log(`Second Greatest is: ${result.secondGreatest}`);
