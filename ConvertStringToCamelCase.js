function toCamelCase(str) {
  str = str.split("_");
  if (str.length === 1) str = str[0].split("-");
  return str.reduce((accum, cur, i, arr) => {
    if (i === 0) {
      return (accum += cur);
    }
    return (accum += cur.charAt(0).toUpperCase() + cur.slice(1));
  });
}

console.log(toCamelCase("The-Steal-Warrior"));
console.log(toCamelCase("the-stealth-warrior"));
