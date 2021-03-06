/* ===================================================================
DAY-5 ASSIGNMENT

Assignment link: https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit
======================================================================
*/


/* ===================================================================
1. Do the below programs in anonymous function & IIFE
======================================================================
*/


// a. Print odd numbers in an array

// Anonymous
var printOddNums = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      console.log(arr[i])
    }
  }
};

// IIFE
(function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4]); // 1 3


// b. Convert all the strings to title caps in a string array

// Anonymous
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
};

// Create function to loop through string array and title caps each string.
var arrToTitleCaps = function(arr) {
  var titleCappedArr = []

  for(var i = 0; i < arr.length; i++) {
     arr[i] = strToTitleCaps(arr[i])
     titleCappedArr.push(arr[i])
  }
  return titleCappedArr
};

// IIFE
(function(arr) {
  var titleCappedArr = []

  for(var i = 0; i < arr.length; i++) {
     arr[i] = (function(str) {
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
    })(arr[i]);

     titleCappedArr.push(arr[i])
  }
  console.log(titleCappedArr)
})(['hello world', 'world wide web']); // ['Hello World', 'World Wide Web']


// c. Sum of all numbers in an array

// Anonymous
var addArrayNumbers = function(arr) {
  var sum = 0

  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
};

// IIFE
(function(arr) {
  var sum = 0

  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
})([1, 2, 3]); // 6


// d. Return all the prime numbers in an array

// Anonymous
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
};

// Create function to get primes from an array
var getPrimesArray = function(arr) {
  var primes = []

  for(var i = 0; i < arr.length; i++) {
    if(checkPrime(arr[i])) {
      primes.push(arr[i])
    }
  }
  return primes
};

// IIFE
(function(arr) {
  var primes = []

  for(var i = 0; i < arr.length; i++) {
    var checkPrime = (function(num) {
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
    })(arr[i]);

    if(checkPrime) {
      primes.push(arr[i])
    }
  }
  console.log(primes)
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // ??[2, 3, 5, 7]


// e. Return all the palindromes in an array

// Anonymous
var getPalindromesArray = function(arr) {
  var palindromes = []

  for(var item of arr) {
    var reversedItem = item.split('').reverse().join('')

    if(item === reversedItem) {
      palindromes.push(item)
    }
  }
  return palindromes
};

// IIFE
(function(arr) {
  var palindromes = []

  for(var item of arr) {
    var reversedItem = item.split('').reverse().join('')

    if(item === reversedItem) {
      palindromes.push(item)
    }
  }
  console.log(palindromes)
})(['racecar', 'apple', 'civic', 'banana']); // ['racecar', 'civic']


// f. Return median of two sorted arrays of the same size

// Anonymous
var getMedian = function(arr1, arr2) {
  var arr = [...arr1, ...arr2]
  arr.sort((a, b) => a - b)
  var length = arr.length

  // Calculate median for array of even numbers
  var median = (arr[(length/2) - 1 ] + arr[(length/2)]) / 2
  return median

};

// IIFE
(function(arr1, arr2) {
  var arr = [...arr1, ...arr2]
  arr.sort((a, b) => a - b)
  var length = arr.length

  // Calculate median for array of even numbers
  var median = (arr[(length/2) - 1 ] + arr[(length/2)]) / 2
  console.log(median)

})([3, 1, 2], [5, 4, 6]); // 3.5


// g. Remove duplicates from an array

// Anonymous
var removeDuplicates = function(arr) {
  var noDuplicates = []
  
  for(var item of arr) {
    if(!noDuplicates.includes(item)) {
      noDuplicates.push(item)
    }
  }
  return noDuplicates
};

// IIFE
(function(arr) {
  var noDuplicates = []
  
  for(var item of arr) {
    if(!noDuplicates.includes(item)) {
      noDuplicates.push(item)
    }
  }
  console.log(noDuplicates)
})([1, 1, 'apple', 'car', 'apple']); // [1, 'apple', 'car']


// h. Rotate an array by k times

// Anonymous
var rotate = function(arr, k) {
  var toRotate = []

  while(toRotate.length < k) {
    toRotate.push(arr.shift())
  }
  var rotatedArr = [...arr, ...toRotate]
  return rotatedArr
};

// IIFE
(function(arr, k) {
  var toRotate = []

  while(toRotate.length < k) {
    toRotate.push(arr.shift()) // Use pop() to rotate in opposite direction.
  }
  var rotatedArr = [...arr, ...toRotate]
  console.log(rotatedArr)
})([1, 2, 3, 4, 5, 6, 7], 2); // [3, 4, 5, 6, 7, 1, 2]


/* ===================================================================
2. GUVI : Zen Code-Sprints :??? JavaScript Functions ??? Warmup Pbms
Source: https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f
======================================================================
*/

// 2.1 Write a function called ???addFive???.
// Given a number, ???addFive??? returns 5 added to that number.
function addFive(num) {
  return num + 5
}
console.log(addFive(5)); // 10
console.log(addFive(0)); // 5
console.log(addFive(-5)); // 0


// 2.2 Write a function called ???getOpposite???.
//Given a number, return its opposite
function getOpposite(num) {
  if(typeof num !== 'number' || num % 1 !== 0) {
    return -1
  } else {
    return 0 - num
  }
}
console.log(getOpposite(5)) // -5
console.log(getOpposite(0)) // 0
console.log(getOpposite(-5)) // 5
console.log(getOpposite('5a')) // -1
console.log(getOpposite(5.5)) // -1


// 2.3 Fill in your code that takes an number minutes and converts it to seconds.
function toSeconds(num) {
  return num * 60
}
console.log(toSeconds(5)) // 300
console.log(toSeconds(3)) // 180
console.log(toSeconds(2)) // 120


// 2.4 Create a function that takes a string and returns it as an integer.
function toInteger(str) {
  return parseInt(str)
}
console.log(toInteger('6'))  // 6
console.log(toInteger('1000'))  // 1000
console.log(toInteger('12'))  // 12


// 2.5 Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(num) {
  return num + 1
}
console.log(nextNumber(0)) // 1
console.log(nextNumber(9)) // 10
console.log(nextNumber(-3)) // -2


// 2.6 Create a function that takes an array and returns the first element.
function getFirstElement(arr) {
  return arr[0]
}
console.log(getFirstElement([1, 2, 3])) // 1
console.log(getFirstElement([80, 5, 100])) // 80
console.log(getFirstElement([-500, 0, 50])) // -500


// 2.7 Write a function that converts hours into seconds.
function hourToSeconds(num) {
  return num * 3600
}
console.log(hourToSeconds(2)) // 7200
console.log(hourToSeconds(10)) // 36000
console.log(hourToSeconds(24)) // 86400


// 2.8 Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1, num2) {
  return (num1 * 2) + (num2 * 2)
}
console.log(findPerimeter(6, 7)) // 26
console.log(findPerimeter(20, 10)) // 60
console.log(findPerimeter(2, 9)) // 22


// 2.9 Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2) {
  return num1 + num2 < 100
}
console.log(lessThan100(22, 15)) // true
console.log(lessThan100(83, 34)) // false


// 2.10 There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(num1, num2) {
  return num1 % num2
}
console.log(remainder(1, 3)) // 1
console.log(remainder(3, 4)) // 3
console.log(remainder(-9, 45)) // -9
console.log(remainder(5, 5)) // 0


// 2.11 Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function countAnimals(turkey, horse, pig) {
  return (turkey * 2) + (horse * 4) + (pig * 4)
}
console.log(countAnimals(2, 3, 5)) // 36
console.log(countAnimals(1, 2, 3)) // 22
console.log(countAnimals(5, 2, 8)) // 50


// 2.12 Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(minutes, fps) {
  return minutes * 60 * fps
}
console.log(frames(1, 1)) // 60
console.log(frames(10, 1)) // 600
console.log(frames(10, 25)) //15000


// 2.13 Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num) {
  return num % 5 === 0
}
console.log(divisibleByFive(5)) // true
console.log(divisibleByFive(-55)) // true
console.log(divisibleByFive(37)) // false


// 2.14 Write a function called ???isEven???.
// Given a number, ???isEven??? returns whether it is even.
function isEven(num) {
  if(typeof num !== 'number') {
    return -1
  }
  return num % 2 === 0
}
console.log(isEven(12)) // true
console.log(isEven(0)) // true
console.log(isEven(11)) // false
console.log(isEven('11h')) // -1


// 2.15 Write a function called ???areBothOdd???.
// Given 2 numbers, ???areBothOdd??? returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2) {
  return num1 % 2 !== 0 && num2 % 2 !== 0
}
console.log(areBothOdd(1, 3)) // true
console.log(areBothOdd(1, 4)) // false
console.log(areBothOdd(2, 3)) // false
console.log(areBothOdd(0, 0)) // false


// 2.16 Write a function called ???getFullName???.
// Given a first and a last name, ???getFullName??? returns a single string with the given first and last names separated by a single space.
function getFullName(fname, lname) {
  if(fname === undefined) {
    fname = ''
  }
  if(lname === undefined) {
    lname = ''
  }
  return fname + ' ' + lname
}
console.log(getFullName('GUVI', 'GEEK')) // 'GUVI GEEK'
console.log(getFullName('GUVI')) // 'GUVI'
console.log(getFullName(undefined, 'GEEK')) // ' GEEK'
console.log(getFullName()) // ' '


// 2.17 Write a function called ???getLengthOfWord???.
// Given a word, ???getLengthOfWord??? returns the length of the given word.
function getLengthOfWord(word) {
  if(typeof word === 'string') {
    return word.length
  }
  return -1
}
console.log(getLengthOfWord('GUVI')) // 4
console.log(getLengthOfWord('')) // 0
console.log(getLengthOfWord()) // -1
console.log(getLengthOfWord(9)) // -1


// 2.18 Write a function called ???isSameLength???.
// Given two words, ???isSameLength??? returns whether the given words have the same length.
function isSameLength(word1, word2) {
  return word1.length === word2.length
}
console.log(isSameLength('GUVI','GEEK')) // true


// 2.19 Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
}
console.log(getDistance(100, 100, 400, 300)) // 360.5551275463989


// 2.20 Write a function called ???getNthElement???.
// Given an array and an integer, ???getNthElement??? returns the element at the given integer, within the given array. If the array has a length of 0, it should return ???undefined???.
function getNthElement(arr, n) {
  return arr[n]
}
console.log(getNthElement([1, 3, 5], 1)) // 3


// 2.21 Given an array, ???getLastElement??? returns the last element of the given array. If the given array has a length of 0, it should return ???-1???.
function getLastElement(arr) {
  if(arr.length === 0) {
    return -1
  }
  return arr[arr.length - 1]
}
console.log(getLastElement([1, 2, 3, 4])) // 4


// 2.22 Write a function called ???getProperty???.
// Given an object and a key, ???getProperty??? returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
function getProperty(obj, key) {
  return obj[key]
}
var obj = {mykey: 'value'}
console.log(getProperty(obj, 'mykey')) // value
console.log(getProperty(obj, 'dummykey')) // undefined

// 2.23 Write a function called ???addProperty???.
// Given an object and a key, ???addProperty??? adds a new property on the given object with a value of true
function addProperty(obj, key) {
  obj[key] = true
}
var obj = {}
addProperty(obj, 'mykey')
console.log(obj) // {mykey: true}


// 2.24 Write a function called ???removeProperty???.
// Given an object and a key, ???removeProperty??? removes the given key from the given object.
function removeProperty(obj, key) {
  delete obj[key]
}
var obj = {name: 'bob'}
removeProperty(obj, 'name')
console.log(obj.name) // undefined


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
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
console.log(countPositivesSumNegatives(arr)) // [5, -17]


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
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
console.log(getPositives(arr)) // [10, 12, 5, 90, 1]


// 2.27 Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n) {
  var result = []

  for(let i = 0; i <= n; i++) {
    result.push(2 ** i)
  }
  return result.join(', ')
}
console.log(powersOfTwo(0)) // 1
console.log(powersOfTwo(1)) // 1, 2
console.log(powersOfTwo(2)) // 1, 2, 4


// 2.28 Find the maximum number in an array of numbers
function findMax(arr) {
  var max = arr[0]

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
console.log(`Max: ${findMax(arr)}`)


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

function printPrimes(n) {
  var counter = 0
  var num = 1
  while(counter < n) {
    if(isNumPrime(num)) {
      console.log(num)
      counter++
      num++
    }
    num++
  }
}
printPrimes(100)


// 2.30 Create a function that will return in an array the first ???nPrimes??? prime numbers greater than a particular number ???startAt???
function getNPrimes(startAt, nPrimes) {
  var counter = 0
  var num = startAt + 1
  var result = []
  while(counter < nPrimes) {
    // Use 'isNumPrime()' from problem 2.29. 
    if(isNumPrime(num)) {
      result.push(num)
      counter++
    }
    num++
  }
  return result
}
console.log(getNPrimes(10, 15)) // [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]


// 2.31 Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('')
}
console.log(reverseString('JavaScript')) // tpircSavaJ


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
console.log(mergeArrays([1, 2, 3], [4, 5, 6])) // [1, 2, 3, 4, 5, 6]


// 2.33 Calculate the sum of numbers received in a comma delimited string
function sumCSV(str) {
  var numbers = str.split(',')
  var sum = 0

  for(var num of numbers) {
    sum += +num
  }
  return sum
}
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9')) // 57.3


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
printOdd([1, 2, 3, 4, 5]) // 1 3 5


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
console.log(toTitleCapsArr(['gnu is not unix', 'pip installs python'])) // ['Gnu Is Not Unix', 'Pip Installs Python']


// c. Sum of all numbers in an array
var addNumbers = (arr) => {
  var sum = 0

  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
console.log(addNumbers([1, 2, 3, 4, 5])) // 15


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
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [2, 3, 5, 7]


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
console.log(getPalindromes(['pip', 'npm', 'level', 'tenet', 'hello'])) // ['pip', 'level', 'tenet']