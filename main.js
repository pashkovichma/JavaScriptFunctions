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

function getFullName (persons) {
  const firtsName = (persons.firtsName)[0].toUpperCase() + (persons.firtsName).slice(1);
  const lastName = (persons.lastName)[0].toUpperCase() + (persons.lastName).slice(1);
  
  return (`${firtsName} ${lastName}`);
}

function filterUniqueWords(text) {
  const words = text.toLowerCase().match(/\b[\w'-]+\b/g);
  const uniqueWords = words.filter((item, index) => words.indexOf(item) === index).sort();
  
  return uniqueWords;
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