function sqInRect(lng, wdth) {
  if (lng === wdth) return null;

  let result = [];

  while (lng !== 0 && wdth !== 0) {
    if (lng < wdth) {
      result.push(lng);
      wdth -= lng;
    } else {
      result.push(wdth);
      lng -= wdth;
    }
  }
}

sqInRect(5, 3);
