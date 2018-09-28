function removeNb(n) {
  let results = [];
  let total = (n * (n + 1)) / 2;

  for (let x = 1; x <= n; x++) {
    let y = (total - x) / (x + 1);
    if (y <= n && Number.isInteger(y)) results.push([x, y]);
  }

  return results;
}

console.log(removeNb(26));
console.log(removeNb(100));
