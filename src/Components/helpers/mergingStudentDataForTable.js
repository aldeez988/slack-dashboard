export const mergingStudentsDataForTable = (slackStatistics, usersProfiles) => {
  slackStatistics.forEach(statistic => {
    usersProfiles.forEach(profile => {
      if (profile.slackId === statistic.userSlackId) {
        statistic.firstName = profile.firstName;
        statistic.lastName = profile.lastName;
        statistic.email = profile.email;
      }
    });
  });
  return slackStatistics;
};

export const mergingStudentsDataWithTotalPerformance = (
  studentsPerformance,
  usersProfiles
) => {
  let mergedUserData = [];
  studentsPerformance.forEach(statistic => {
    usersProfiles.forEach(profile => {
      if (profile.slackId === statistic[1]) {
        profile.totalPoints = statistic[0];
        const data = {
          firstName: profile.firstName,
          lastName: profile.lastName,
          totalPoints: statistic[0]
        };
        mergedUserData.push(data);
      }
    });
  });
  return mergedUserData;
};
