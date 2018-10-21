function decodeResistorColors(bands) {
  let num = "";
  let result = "";
  const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9
  };
  bands.split(" ").forEach((val, i, arr) => {
    if (i < 2) {
      num += colors[val];
    }
    if (i === 2) {
      num = parseInt(num);
      num *= Math.pow(10, colors[val]);
      if (num < 1000) {
        result += `${num} ohms, `;
      } else if (num < 1000000) {
        result += `${num / 1000}k ohms, `;
      } else {
        result += `${num / 1000000}M ohms, `;
      }
      if (!arr[i + 1]) result += "20%";
    }
    if (i === 3) {
      if (val === "gold") result += "5%";
      if (val === "silver") result += "10%";
    }
  });
  return result;
}
