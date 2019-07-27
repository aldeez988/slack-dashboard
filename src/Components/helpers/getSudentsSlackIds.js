export const getStudentsSlackIds = (allStudentProfiles, classId) => {
  return allStudentProfiles
    .filter(student => student.classId === classId)
    .map(student => student.slackId);
};
