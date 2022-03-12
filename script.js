/* ===================================================================
DAY-5 ASSIGNMENT

Assignment link: https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit
======================================================================
*/


/* ===================================================================
1. Do the below programs in anonymous function & IIFE
======================================================================
*/
// (IIFE not covered yet)


// a. Print odd numbers in an array
var printOddNums = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      console.log(arr[i])
    }
  }
}


// b. Convert all the strings to title caps in a string array

// Create function to convert string to title caps
var strToTitleCaps = function(str) {
  var words = str.split(' ')
  var titleCAppedWords = []
  
  for(var word of words) {
    var letters = word.split('')
    letters[0] = letters[0].toUpperCase()
    word = letters.join('')
    titleCAppedWords.push(word)
  }

  var titleCappedStr = titleCAppedWords.join(' ')
  return titleCappedStr
}

// Create function to loop through string array and title caps each string.
var arrToTitleCaps = function(arr) {
  var titleCappedArr = []

  for(var i = 0; i < arr.length; i++) {
     arr[i] = strToTitleCaps(arr[i])
     titleCappedArr.push(arr[i])
  }
  return titleCappedArr
}


// c. Sum of all numbers in an array
var addArrayNumbers = function(arr) {
  var sum = 0

  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}


// d. Return all the prime numbers in an array

// Create function to check if a number is prime
var checkPrime = function(num) {
  var divisors = 0

  for(var i = 1; i <= num; i++) {
    if(num % i === 0) {
      divisors++
    }
  }

  if(divisors === 2) {
    return true
  }
  return false
}

// Create function to get primes from an array
var getPrimesArray = function(arr) {
  var primes = []

  for(var i = 0; i < arr.length; i++) {
    if(checkPrime(arr[i])) {
      primes.push(arr[i])
    }
  }
  return primes
}


// e. Return all the palindromes in an array
var getPalindromesArray = function(arr) {
  var palindromes = []

  for(var item of arr) {
    var reversedItem = item.split('').reverse().join('')

    if(item === reversedItem) {
      palindromes.push(item)
    }
  }
  return palindromes
}


// f. Return median of two sorted arrays of the same size
var getMedian = function(arr1, arr2) {
  var arr = [...arr1, ...arr2]
  arr.sort((a, b) => a - b)
  var length = arr.length

  // Calculate median for array of even numbers
  var median = (arr[(length/2) - 1 ] + arr[(length/2)]) / 2
  return median

}


// g. Remove duplicates from an array
var removeDuplicates = function(arr) {
  var noDuplicates = []
  
  for(var item of arr) {
    if(!noDuplicates.includes(item)) {
      noDuplicates.push(item)
    }
  }
  return noDuplicates
}


// h. Rotate an array by k times
var rotate = function(arr, k) {
  var toRotate = []

  while(toRotate.length < k) {
    toRotate.push(arr.shift())
  }
  var rotatedArr = [...arr, ...toRotate]
  return rotatedArr
}


/* ===================================================================
2. GUVI : Zen Code-Sprints :— JavaScript Functions — Warmup Pbms
Source: https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f
======================================================================
*/

// 2.1 Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
function addFive(num) {
  return num + 5
}


// 2.2 Write a function called “getOpposite”.
//Given a number, return its opposite
function getOpposite(num) {
  if(typeof num !== 'number' || num % 1 !== 0) {
    return -1
  } else {
    return 0 - num
  }
}


// 2.3 Fill in your code that takes an number minutes and converts it to seconds.
function toSeconds(num) {
  return num * 60
}


// 2.4 Create a function that takes a string and returns it as an integer.
function toInteger(str) {
  return parseInt(str)
}


// 2.5 Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(num) {
  return num + 1
}


// 2.6 Create a function that takes an array and returns the first element.
function getFirstElement(arr) {
  return arr[0]
}


// 2.7 Write a function that converts hours into seconds.
function hourToSeconds(num) {
  return num * 3600
}


// 2.8 Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1, num2) {
  return (num1 * 2) + (num2 * 2)
}


// 2.9 Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2) {
  return num1 + num2 < 100
}


// 2.10 There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(num1, num2) {
  return num1 % num2
}


// 2.11 Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function countAnimals(turkey, horse, pig) {
  return (turkey * 2) + (horse * 4) + (pig * 4)
}


// 2.12 Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(minutes, fps) {
  return minutes * 60 * fps
}


// 2.13 Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num) {
  return num % 5 === 0
}


// 2.14 Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.
function isEven(num) {
  if(typeof num !== 'number') {
    return -1
  }
  return num % 2 === 0
}


// 2.15 Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2) {
  return num1 % 2 !== 0 && num2 % 2 !== 0
}


// 2.16 Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
function getFullName(fname, lname) {
  if(fname === undefined) {
    fname = ''
  }
  if(lname === undefined) {
    lname = ''
  }
  return fname + ' ' + lname
}


// 2.17 Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word) {
  if(typeof word === 'string') {
    return word.length
  }
  return -1
}


// 2.18 Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2) {
  return word1.length === word2.length
}


// 2.19 Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
}


// 2.20 Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
function getNthElement(arr, n) {
  return arr[n]
}


// 2.21 Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
function getLastElement(arr) {
  if(arr.length === 0) {
    return -1
  }
  return arr.slice(-1)
}


// 2.22 Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
function getProperty(obj, key) {
  if(!obj.hasOwnProperty(key)) {
    return 'NA'
  }
  return obj[key]
}


// 2.23 Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true
function addProperty(obj, key) {
  obj[key] = true
}


// 2.24 Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
function removeProperty(obj, key) {
  delete obj[key]
}


// 2.25 Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
function countPositivesSumNegatives(arr) {
  var positiveCount = 0
  var negativeSum = 0

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      positiveCount++
    } else if(arr[i] < 0) {
      negativeSum += arr[i]
    }
  }
  return [positiveCount, negativeSum]
}


// 2.26 Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(arr) {
  var positiveArr = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      positiveArr.push(arr[i])
    }
  }
  return positiveArr
}


// 2.27 Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n) {
  var result = []

  for(let i = 0; i <= n; i++) {
    result.push(2 ** i)
  }
  return result
}


// 2.28 Find the maximum number in an array of numbers
function findMax(arr) {
  arr.sort((a, b) => a - b)
  var max = arr[0]

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}


// 2.29 Print the first 100 prime numbers
function isNumPrime(num) {
  var divisors = 0

  for(var i = 1; i <= num; i++) {
    if(num % i === 0) {
      divisors++
    }
  }

  if(divisors === 2) {
    return true
  }
  return false
}

function printPrimes() {
  var counter = 0
  var num = 1
  while(counter < 100) {
    if(isNumPrime(num)) {
      console.log(num)
      counter++
      num++
    }
    num++
  }
}


// 2.30 Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
function printNPrimes(startAt, nPrimes) {
  var counter = 0
  var num = startAt + 1
  while(counter < nPrimes) {
    // Use 'isNumPrime()' from problem 2.29. 
    if(isNumPrime(num)) {
      console.log(counter + 1, ': ',num)
      counter++
      num++
    }
    num++
  }
}


// 2.31 Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('')
}


// 2.32 Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
  var mergedArr = []

  for(var item of arr1) {
    mergedArr.push(item)
  }
  for(var item of arr2) {
    mergedArr.push(item)
  }

  return mergedArr
}


// 2.33 Calculate the sum of numbers received in a comma delimited string
function sumCSV(str) {
  var numbers = str.split(',')
  var sum = 0

  for(var num of numbers) {
    sum += +num
  }
  return sum
}


/* ==========================================================
 3. Do the below programs in arrow functions
 ============================================================
*/


// a. Print odd numbers in an array
var printOdd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      console.log(arr[i])
    }
  }
}


// b. Convert all the strings to title caps in a string array

// Create function to convert string to title caps.
var toTitleCaps = (str) => {
  var words = str.split(' ')
  var titleCAppedWords = []
  
  for(var word of words) {
    var letters = word.split('')
    letters[0] = letters[0].toUpperCase()
    word = letters.join('')
    titleCAppedWords.push(word)
  }

  var titleCappedStr = titleCAppedWords.join(' ')
  return titleCappedStr
}

// Create function to loop through string array and title caps each string.
var toTitleCapsArr = (arr) => {
  var titleCappedArr = []

  for(var i = 0; i < arr.length; i++) {
     arr[i] = toTitleCaps(arr[i])
     titleCappedArr.push(arr[i])
  }
  return titleCappedArr
}


// c. Sum of all numbers in an array
var addNumbers = (arr) => {
  var sum = 0

  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}


// d. Return all the prime numbers in an array

// Create function to determine if a number is prime
var isPrime = (num) => {
  var divisors = 0

  for(var i = 1; i <= num; i++) {
    if(num % i === 0) {
      divisors++
    }
  }

  if(divisors === 2) {
    return true
  }
  return false
}

// Create function to get primes from an array
var getPrimes = (arr) => {
  var primes = []

  for(var i = 0; i < arr.length; i++) {
    if(isPrime(arr[i])) {
      primes.push(arr[i])
    }
  }
  return primes
}


// e. Return all the palindromes in an array
var getPalindromes = (arr) => {
  var palindromes = []

  for(var item of arr) {
    var reversedItem = item.split('').reverse().join('')

    if(item === reversedItem) {
      palindromes.push(item)
    }
  }
  return palindromes
}
