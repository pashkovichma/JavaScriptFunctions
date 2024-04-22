function calculateDiscountedPrice (products, discount) {
  if (!Array.isArray(products) || 
      Array.isArray(products) && !products.length || 
      typeof discount !== 'number' || discount < 0 || 
      discount > 100) {
    throw new Error('Invalid input data');
  }

  const productsWithDiscountedPrices = products.map(item => ({
    name: item.name,
    price: item.price * (100 - discount) / 100,
  }));

  return productsWithDiscountedPrices;
}

function calculateTotalPrice (products) {
  if (!Array.isArray(products) || 
      Array.isArray(products) && !products.length) {
    throw new Error('Invalid input data');
  }
  return products.reduce((accumulator, product) => accumulator + product.price, 0);
}

function getFullName (persons) {
  const firtsName = (persons.firtsName)[0].toUpperCase() + (persons.firtsName).slice(1);
  const lastName = (persons.lastName)[0].toUpperCase() + (persons.lastName).slice(1);
  
  return (`${firtsName} ${lastName}`);
}

function getWordsOfText(text) {
  return text.toLowerCase().match(/\b[\w'-]+\b/g);
}

function filterUniqueValues(values) {
  return values.filter((item, index) => values.indexOf(item) === index)
}

function sortAlphabetically(values) {
  return values.sort();
}
  
function filterUniqueWords(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return sortAlphabetically(filterUniqueValues(getWordsOfText(text)));
}

function getAverageGrade (students) {
  const allStudentsGrades = students.flatMap(student => student.grades);
  
  return allStudentsGrades.reduce((totalGrade, grade) => totalGrade + grade, 0) / allStudentsGrades.length; 
}

function  createCounter () {
  let currentCount = 1;

  return function() { 
    return currentCount++;
  };
}

function repeatFunction (functionToInvoke, number) {
  if (number < 0) {

    return function () {
      while (true) {
        functionToInvoke();
      }
    }
    
  } else {
    let i = number;

    return function () {
      while(i > 0) {
        functionToInvoke();
        i--;
      }
    }
  }
}

function calculateFactorial(number, accumulator = 1) {
  if (number === 0) {
      return accumulator;
  }

  return calculateFactorial(number - 1, number * accumulator);
}

function power(base, exponent) {
  if (exponent === 0) {
      return 1;
  }
  if (exponent === 1) {
      return base;
  }
  
  return base * power(base, exponent - 1);
}

function lazyMap(array, mappingFunction) {
  let index = 0;

  return {
      next: function() {
          if (index < array.length) {
              return { value: mappingFunction(array[index++]), done: false };
          } else {
              return { done: true };
          }
      }
  };
}

function fibonacciGenerator() {
  let previous = 0;
  let current = 1;

  return {
      next: function() {
          const value = current;
          current += previous;
          previous = value;
          return { value: value, done: false };
      }
  };
}
