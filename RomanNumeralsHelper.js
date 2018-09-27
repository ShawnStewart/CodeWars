// TODO: create a RomanNumerals helper object
const RomanNumerals = {
  toRoman: function(num) {
    let result = [];
    let numerals = [
      ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    ];
    num = num.toString().split("");
    let thousands = num.splice(0, num.length - 3).join("");

    num.reverse().forEach((current, i) => {
      current = parseInt(current);
      result.unshift(numerals[i][current]);
    });

    for (let i = 0; i < thousands; i++) {
      result.unshift("M");
    }
    return result.join("");
  },
  fromRoman: function(str) {
    let result = 0;
    let skip = 0;
    str = str.split("");
    str.forEach((current, i) => {
      if (skip > 0) {
        skip--;
        return;
      } else {
        switch (current) {
          case "M":
            result += 1000;
            break;
          case "D":
            result += 500;
            break;
          case "C":
            if (str[i + 1] === "M") {
              result += 900;
              skip++;
            } else if (str[i + 1] === "D") {
              result += 400;
              skip++;
            } else {
              result += 100;
            }
            break;
          case "L":
            result += 50;
            break;
          case "X":
            if (str[i + 1] === "C") {
              result += 90;
              skip++;
            } else if (str[i + 1] === "L") {
              result += 40;
              skip++;
            } else {
              result += 10;
            }
            break;
          case "V":
            result += 5;
            break;
          case "I":
            if (str[i + 1] === "X") {
              result += 9;
              skip++;
            } else if (str[i + 1] === "V") {
              result += 4;
              skip++;
            } else {
              result += 1;
            }
            break;
        }
      }
    });
    return result;
  }
};

console.log("\n");
console.log(RomanNumerals.toRoman(1000));
console.log(RomanNumerals.toRoman(999));
console.log(RomanNumerals.toRoman(2006));
console.log(RomanNumerals.toRoman(01234));
console.log(RomanNumerals.toRoman(432));
console.log(RomanNumerals.toRoman(10432));
console.log("\n");
console.log(RomanNumerals.fromRoman("M"));
console.log(RomanNumerals.fromRoman("CMXCIX"));
