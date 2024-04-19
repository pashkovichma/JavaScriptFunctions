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

function getFullName (person) {
  const firtsName = (person.firtsName)[0].toUpperCase() + (person.firtsName).slice(1);
  const lastName = (person.lastName)[0].toUpperCase() + (person.lastName).slice(1);
  return (`${firtsName} ${lastName}`);
}
