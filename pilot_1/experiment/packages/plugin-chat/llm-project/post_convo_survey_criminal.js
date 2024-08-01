var post_convo_survey_criminal = {
  elements: [
    {
      type: "matrix",
      name: "criminal-openmindedness-post",
      title:
        "Rate the following statements on the seven point scale: When I have conversations about the U.S. criminal justice system, I...",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value:
            "criminal-openmindedness-post...have little patience for arguments about the criminal justice system that I disagree with @R@",
          text: "...have little patience for arguments about the criminal justice system that I disagree with",
        },
        {
          value:
            "criminal-openmindedness-post...avoid messages about the criminal justice system that I disagree with @R@",
          text: "...avoid messages about the criminal justice system that I disagree with",
        },
        {
          value:
            "criminal-openmindedness-post...believe it is a waste of time to pay attention to certain political ideas about the criminal justice system @R@",
          text: "...believe it is a waste of time to pay attention to certain political ideas about the criminal justice system",
        },
        {
          value:
            "criminal-openmindedness-post..am open to considering other political viewpoints about the criminal justice system",
          text: "...am open to considering other political viewpoints about the criminal justice system",
        },
        {
          value:
            "criminal-openmindedness-post...consider as many different opinions as possible about the criminal justice system",
          text: "...consider as many different opinions as possible about the criminal justice system",
        },
      ],
    },
    {
      type: "matrix",
      name: "criminal-polarization-post",
      title:
        "How much do you agree or disagree with the following statements on the criminal justice system in the U.S.? ",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value:
            "criminal-polarization-post-Implementing comprehensive background checks for all individuals entering the criminal justice system is necessary",
          text: "Implementing comprehensive background checks for all individuals entering the criminal justice system is necessary",
        },
        {
          value:
            "criminal-polarization-post-Enhancing mental health support services for incarcerated individuals would be worth the cost and resources",
          text: "Enhancing mental health support services for incarcerated individuals would be worth the cost and resources",
        },
        {
          value:
            "criminal-polarization-post-The use of solitary confinement as a punishment should be banned",
          text: "The use of solitary confinement as a punishment should be banned",
        },
        {
          value:
            "criminal-polarization-post-Inmates should have greater access to educational programs",
          text: "Inmates should have greater access to educational programs",
        },
        {
          value:
            "criminal-polarization-post-Non-violent offenders should be permitted to serve sentences through community service or house arrest",
          text: "Non-violent offenders should be permitted to serve sentences through community service or house arrest",
        },
        {
          value: "criminal-polarization-post-The use of private prisons should be restricted",
          text: "The use of private prisons should be restricted",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "criminal-polarization-general-post",
      title:
        "How much do you agree or disagree with the following statements on the criminal justice system in the U.S.? ",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value:
            "criminal-polarization-general-post-The benefits of a punishment-focused criminal justice system outweigh the  downsides @R@",
          text: "The benefits of a punishment-focused criminal justice system outweigh the downsides",
        },
        {
          value:
            "criminal-polarization-general-post-The federal government should implement stricter regulations to reduce incarceration rates",
          text: "The federal government should implement stricter regulations to reduce incarceration rates",
        },
        {
          value:
            "criminal-polarization-general-post-The federal government should implement more robust rehabilitation programs to improve public safety",
          text: "The federal government should implement more robust rehabilitation programs to improve public safety",
        },
        {
          value:
            "criminal-polarization-general-post-The federal government should implement greater punishments to improve public safety @R@",
          text: "The federal government should implement greater punishments to improve public safety",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "expression",
      name: "criminal-slider1-post",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the criminal justice system in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "criminal-slider1-post-placeholder",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the criminal justice system in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="criminal-slider1-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider2-post",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider2-post-placeholder",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider2-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider3-post",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider3-post-placeholder",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider3-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider4-post",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider4-post-placeholder",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider4-post-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "matrix",
      name: "criminal-reason-of-avoidance-post",
      title:
        "Imagine that you are asked to have a serious conversation about the criminal justice system in the U.S. with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value: "criminal-offending-reason-...I would not want to offend someone",
          text: "...I would not want to offend someone",
        },
        {
          value: "criminal-offending-reason-...I would not want to be offended by someone",
          text: "...I would not want to be offended by someone",
        },
        {
          value:
            "criminal-offending-reason-...I would not want to be in an awkward, tense, or confrontational situation",
          text: "...I would not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value:
            "criminal-offending-reason-...I would not want to deal with emotional distress or fatigue",
          text: "...I would not want to deal with emotional distress or fatigue",
        },
        {
          value:
            "criminal-offending-reason-...I would not want people judging me negatively or misunderstanding me",
          text: "...I would not want people judging me negatively or misunderstanding me",
        },
        {
          value:
            "criminal-offending-reason-...I would not want to come off as ignorant or uneducated",
          text: "...I would not want to come off as ignorant or uneducated",
        },
        {
          value: "criminal-offending-reason-...I have had previous negative experiences",
          text: "...I have had previous negative experiences",
        },
        {
          value: "criminal-offending-reason-...I would not want to incur social repercussions",
          text: "...I would not want to incur social repercussions",
        },
        {
          value:
            "criminal-offending-reason-...I would be afraid of feeling disempowered, unheard, or invalidated",
          text: "...I would be afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "criminal-offending-reason-...I would be afraid of feeling unsafe",
          text: "...I would be afraid of feeling unsafe",
        },
      ],
    },
  ],
};
