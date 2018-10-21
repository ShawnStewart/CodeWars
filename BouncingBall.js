function bouncingBall(h, bounce, window) {
  let result;
  if (h > window) {
    result = 1;
  } else {
    return -1;
  }

  h *= bounce;

  while (h > window) {
    result += 2;
    h *= bounce;
  }

  return result;
}

console.log(bouncingBall(3, 0.66, 1.5));
