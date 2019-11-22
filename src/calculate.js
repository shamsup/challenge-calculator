import flatMap from 'lodash/flatMap';

const newlineOrComma = /(,|\n)/;
const testCustomSingleDelimiter = /^\/\/(.)\n/;
const testCustomMultiDelimiter = /^\/\/\[([^\]]+)\]\n/;
const testMultipleDelimiters = /^\/\/((\[[^\]]+\]){2,})\n/;

function replaceDelimiter(rule, input) {
  const delimiter = input.match(rule)[1];
  input = input.replace(rule, '');
  return input.split(delimiter);
}

function replaceMultipleDelimiters(rule, input) {
  // '[*][!!][r9r]'
  let delimiterString = input.match(rule)[1];
  // '*][!!][r9r'
  delimiterString = delimiterString.slice(1, -1);
  // ['*', '!!', 'r9r']
  const delimiters = delimiterString.split('][');

  input = input.replace(rule, '');
  return delimiters.reduce((values, delimiter) => {
    return flatMap(values, v => v.split(delimiter));
  }, [input]);
}

const processors = new Map();
processors.set(testCustomSingleDelimiter, replaceDelimiter);
processors.set(testCustomMultiDelimiter, replaceDelimiter);
processors.set(testMultipleDelimiters, replaceMultipleDelimiters);

const delimiterRules = [
  testCustomSingleDelimiter,
  testCustomMultiDelimiter,
  testMultipleDelimiters
];

function getNumbersFromInput(input) {
  const matchedRule = delimiterRules.find(rule => rule.test(input));
  let numbers;
  if (matchedRule) {
    numbers = processors.get(matchedRule)(matchedRule, input);
  } else {
    numbers = input.split(newlineOrComma);
  }

  return numbers
    // handle invalid and empty values, cast to number
    .map(n => Number(n) || 0);
}

export default function calculate(input) {
  const numbers = getNumbersFromInput(input)
    // exclude numbers over 1000
    .filter(n => n <= 1000);

  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`No negative numbers allowed, found ${negatives.join(', ')}`);
  }

  const sum = numbers.reduce((acc, num) => (acc + num), 0);
  return sum;
}
