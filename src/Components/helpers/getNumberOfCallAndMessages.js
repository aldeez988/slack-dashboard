export const getCallsNumberAndMessages = (messages, userSlackId) => {
  let callsCounter = 0,
    messageCounter = 0;

  messages.forEach(message => {
    if (message.subtype === "sh_room_created") {
      if (message.user === userSlackId) {
        callsCounter = callsCounter + 1;
        return;
      }
      console.log(message);
      if (message.room.participant_history) {
        const userExist = message.room.participant_history.indexOf(userSlackId);
        if (userExist > -1) {
          callsCounter = callsCounter + 1;
          return;
        }
      }
      return;
    }
    if (message.user === userSlackId) {
      messageCounter = messageCounter + 1;
      //console.log(message)
    }
    if (message.replies) {
      message.replies.forEach(reply => {
        if (reply.user === userSlackId) {
          messageCounter = messageCounter + 1;
          // console.log(reply)
        }
      });
    }
  });
  return { callsCounter, messageCounter, userSlackId };
};

export const getAllNumberOfMessagesAndCalls = (studentsSlackId, messages) => {
  let userData = [];
  studentsSlackId.forEach(id => {
    const response = getCallsNumberAndMessages(messages, id);
    if (response) {
      console.log("number of messages", response);

      userData.push(response);
      return;
    }
  });
  return userData;
};

//Getting student rank by sorting their total number of calls and messages
export const studentsRank = usersMessagesAncCallsNumber => {
  const totalOfAllUsersCallsAndMessages = usersMessagesAncCallsNumber.map(
    data => {
      const totalOfCallAndMessages = data.callsCounter + data.messageCounter;
      return [totalOfCallAndMessages, data.userSlackId];
    }
  );
  return totalOfAllUsersCallsAndMessages.sort(function(a, b) {
    return b[0] - a[0];
  });
};

export const getCurrentUserNumberOfCallsAndMessages = (slackId, results) => {
  return results.find(result => result.userSlackId === slackId);
};
