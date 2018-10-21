function race(v1, v2, g) {
  v1 /= 3600;
  v2 /= 3600;
  console.log(v1, v2);
  let s = -1;
  let d = 0;
  while (d < g) {
    g += v1;
    d += v2;
    s++;
  }
  console.log(s);
  return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60];
}

console.log(race(720, 850, 70));
console.log(race(80, 91, 37));
console.log(race(80, 100, 40));
