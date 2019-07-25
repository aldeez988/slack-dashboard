export const performancePercentage = (
  numberOfMessages,
  numberOfCalls,
  targetMessages,
  targetCalls
) => {
  return (
    ((numberOfMessages + numberOfCalls) * 100) / (targetMessages + targetCalls)
  );
};
