function narcissistic(value) {
  let result = 0;
  value
    .toString()
    .split("")
    .forEach(current => {
      result += Math.pow(Number(current), value.toString().split("").length);
    });
  return result === value;
}

console.log(narcissistic(11));
