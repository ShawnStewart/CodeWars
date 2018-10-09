function woodLength(dimensions) {
  let height = dimensions[0].split(" ");

  let length = dimensions[1].split(" ");

  let width = dimensions[2].split(" ");

  console.log(height, length, width);
}

// function woodLength(dimensions) {
//   let height = dimensions[0].split(" ").map((e, i) => {
//     if (i !== 2) {
//       result = e.split("");
//       result[0] = parseInt(result[0]);
//     }
//     return result;
//   });

//   let length = dimensions[1].split(" ").map((e, i) => {
//     if (i !== 2) {
//       result = e.split("");
//       result[0] = parseInt(result[0]);
//     }
//     return result;
//   });

//   let width = dimensions[2].split(" ").map((e, i) => {
//   console.log(e);
//     if (i !== 2) {
//       result = e.split("");
//       result[0] = parseInt(result[0]);
//     }
//     return result;
//   });

//   console.log(height, length, width);
// }
