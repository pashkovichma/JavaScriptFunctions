function calculateDiscountedPrice (products, discount) {
  let productsWithDiscountedPrices = [];
  products.forEach((item) => {
    productsWithDiscountedPrices.push(item * discount / 100);
  })
  return productsWithDiscountedPrices;
}
