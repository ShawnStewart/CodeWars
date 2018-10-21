var isPP = function(n) {
  let results = [];
  for (let i = 2; i <= Math.floor(Math.pow(n, 0.5)); i++) {
    let power = Math.round(Math.log(n) / Math.log(i));
    if (Math.pow(i, power) === n) {
      results.push(i, power);
    }
  }
  return results.length ? results : null;
};

console.log(isPP(126049300576));
// console.log("random tests");
// let k, m, i, r, l;
// for (i = 0; i < 10; ++i) {
//   (m = (2 + Math.random() * 0xff) | 0),
//     (k = (2 + (Math.random() * Math.log(0x0fffffff)) / Math.log(m)) | 0);
//   l = Math.pow(m, k);
//   r = isPP(l);
//   console.log("r", r === null);
// }
