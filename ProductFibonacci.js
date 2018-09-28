function productFib(prod) {
  let [x, y] = [0, 1];
  while (x * y < prod) [x, y] = [y, x + y];
  return [x, y, x * y === prod];
}

console.log(productFib(4895));
console.log(productFib(5895));
