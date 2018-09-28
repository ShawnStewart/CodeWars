function list(names) {
  if (!names.length) return "";
  let result = "";
  for (let i = 0; i < names.length; i++) {
    result += names[i].name;
    if (i < names.length - 1) {
      if (i === names.length - 2) {
        result += " & ";
      } else {
        result += ", ";
      }
    }
  }
  return result;
}

console.log("1:", list([{ name: "" }]));
console.log("2:", list([{ name: "Bart" }]));
console.log("3:", list([{ name: "Bart" }, { name: "Lisa" }]));
console.log(
  "4:",
  list([{ name: "Bart" }, { name: "Lisa" }, { name: "Homer" }])
);
