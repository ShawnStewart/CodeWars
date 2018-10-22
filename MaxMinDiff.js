function maxAndMin(arr1, arr2) {
  return [
    Math.max(...arr2) - Math.min(...arr1),
    Math.max(...arr1) - Math.min(...arr2)
  ];
}

maxAndMin([3, 10, 5], [20, 7, 15, 8]);
