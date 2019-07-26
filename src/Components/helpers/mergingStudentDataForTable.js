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
