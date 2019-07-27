export const getAveragePerformancePercentage = (
  studentsNumberOfCallsAndMessages,
  totalTarget,
  numberOfStudents
) => {
  let sumOfSudentsMessagesAndCalls = 0;
  studentsNumberOfCallsAndMessages.forEach(result => {
    sumOfSudentsMessagesAndCalls += result.callsCounter + result.messageCounter;
  });

  return Math.round(
    (sumOfSudentsMessagesAndCalls / (totalTarget * numberOfStudents)) * 100
  );
};
