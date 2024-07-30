var experimental_group_last_questions = {
  elements: [
    {
      type: "comment",
      name: "free-response",
      title: `After your conversation with the chat bot, do you feel more willing to have a conversation with others about ${row}? Please freely reflect in the space below.`,
      isRequired: true,
    },
    {
      type: "radiogroup",
      name: "willing-to-converse-likert-post",
      title: `Rate this conversation's effect on your willingness to converse about ${row} with others. Rate on the seven point scale.`,
      isRequired: true,
      choices: [
        {
          value: "Item 1",
          text: "Much less willing",
        },
        {
          value: "Item 2",
          text: "Moderately less willing",
        },
        {
          value: "Item 3",
          text: "Somewhat less willing",
        },
        {
          value: "Item 4",
          text: "Neither more nor less willing",
        },
        {
          value: "Item 5",
          text: "Somewhat more willing",
        },
        {
          value: "Item 6",
          text: "Moderately more willing",
        },
        {
          value: "Item 7",
          text: "Much more willing",
        },
      ],
    },
    {
      type: "comment",
      name: "convo-effect-on-willingness-post",
      title: `What parts of this conversation, if any, affected your willingness to talk with someone who has different views about ${row}? What made you feel like the conversation was or was not productive?`,
      isRequired: true,
    },
    {
      type: "comment",
      name: "new-perspective-post",
      title: `Throughout this conversation, were there any moments that opened you up to a new perspective about the atomic bombings? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?`,
      isRequired: true,
    },
    {
      type: "comment",
      name: "still-contributes-post",
      title: `What still contributes to your willingness or unwillingness to converse with others about ${row}? Please freely reflect in the space below.`,
      isRequired: true,
    },
    {
      type: "comment",
      name: "feelings-about-bot",
      title: `We are still working on improving our chatbot. How did you like talking with the bot? What do you wish were different? Please provide any feedback regarding your conversation that we have not already covered.`,
      isRequired: true,
    },
  ],
};
