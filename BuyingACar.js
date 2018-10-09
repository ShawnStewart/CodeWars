function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let totalValue = startPriceOld;
  let monthCount = 0;
  while (startPriceNew > totalValue) {
    monthCount++;
    if (monthCount % 2 === 0) percentLossByMonth += 0.5;
    startPriceOld *= (100 - percentLossByMonth) / 100;
    startPriceNew *= (100 - percentLossByMonth) / 100;
    totalValue = startPriceOld + monthCount * savingperMonth;
  }
  return [monthCount, Math.round(totalValue - startPriceNew)];
}
