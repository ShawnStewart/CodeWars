function count(string) {
  if (!string) {
    return {};
  }

  let result = {};
  string.split("").forEach(cur => {
    if (!result[cur]) {
      result[cur] = 1;
    } else {
      result[cur]++;
    }
  });
  return result;
}

console.log(count("aba"));
