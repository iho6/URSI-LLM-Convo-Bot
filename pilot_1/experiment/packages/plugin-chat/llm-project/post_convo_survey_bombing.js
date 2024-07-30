var post_convo_survey_bombing = {
  elements: [
    {
      type: "matrix",
      name: "bombing-openmindedness-post",
      title:
        "Rate the following statements on the seven point scale: When I have conversations about the atomic bombings of Hiroshima and Nagasaki, I...",
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
            "bombing-openmindedness-post...have little patience for arguments about the atomic bombings that I disagree with @R@",
          text: "...have little patience for arguments about the atomic bombings that I disagree with",
        },
        {
          value:
            "bombing-openmindedness-post...avoid messages about the atomic bombings that I disagree with @R@",
          text: "...avoid messages about the atomic bombings that I disagree with",
        },
        {
          value:
            "bombing-openmindedness-post...believe it is a waste of time to pay attention to certain political ideas about the atomic bombings @R@",
          text: "...believe it is a waste of time to pay attention to certain political ideas about the atomic bombings",
        },
        {
          value:
            "bombing-openmindedness-post...am open to considering other political viewpoints about the atomic bombings",
          text: "...am open to considering other political viewpoints about the atomic bombings",
        },
        {
          value:
            "bombing-openmindedness-post...consider as many different opinions as possible about the atomic bombings",
          text: "...consider as many different opinions as possible about the atomic bombings",
        },
      ],
    },
    {
      type: "matrix",
      name: "bombing-polarization-post",
      title:
        "How much do you agree or disagree with the following statements on the atomic bombings of Hiroshima and Nagasaki? ",
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
            "bombing-polarization-post-A memorial should be established in the U.S. to honor the victims of the bombings",
          text: "A memorial should be established in the U.S. to honor the victims of the bombings",
        },
        {
          value:
            "bombing-polarization-post-The U.S. government should provide financial reparations to the survivors and their families",
          text: "The U.S. government should provide financial reparations to the survivors and their families",
        },
        {
          value:
            "bombing-polarization-post-The bombings were justified to bring a swift end to the war @R@",
          text: "The bombings were justified to bring a swift end to the war",
        },
        {
          value: "bombing-polarization-post-The bombings were morally wrong",
          text: "The bombings were morally wrong",
        },
        {
          value:
            "bombing-polarization-post-Learning about the atomic bombings of Hiroshima and Nagasaki is essential for understanding the consequences of nuclear warfare",
          text: "Learning about the atomic bombings of Hiroshima and Nagasaki is essential for understanding the consequences of nuclear warfare",
        },
        {
          value:
            "bombing-polarization-post-The U.S. should take responsibility for the humanitarian impact of the bombings",
          text: "The U.S. should take responsibility for the humanitarian impact of the bombings",
        },
        {
          value:
            "bombing-polarization-post-The U.S. should participate in international efforts to promote nuclear disarmament and non-proliferation",
          text: "The U.S. should participate in international efforts to promote nuclear disarmament and non-proliferation",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "bombing-polarization-general-post",
      title:
        "How much do you agree or disagree with the following statements on the atomic bombings of Hiroshima and Nagasaki? ",
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
            "bombing-polarization-general-post-The bombings of Hiroshima and Nagasaki were necessary to end World War II @R@",
          text: "The bombings of Hiroshima and Nagasaki were necessary to end World War II",
        },
        {
          value:
            "bombing-polarization-general-post-The U.S. government should have issued a formal apology to Japan",
          text: "The U.S. government should have issued a formal apology to Japan",
        },
        {
          value:
            "bombing-polarization-general-post-The bombings should be recognized as a war crime under international law",
          text: "The bombings should be recognized as a war crime under international law",
        },
        {
          value:
            "bombing-polarization-general-post-The bombings should be included in educational curricula as a significant historical event",
          text: "The bombings should be included in educational curricula as a significant historical event",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "expression",
      name: "bombing-slider1-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "bombing-slider1-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="bombing-slider1-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider2-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider2-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider2-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider3-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider3-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider3-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider4-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider4-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider4-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "matrix",
      name: "bombing-reason-of-avoidance-post",
      title:
        "Imagine that you are asked to have a serious conversation about the atomic bombings of Hiroshima and Nagasaki with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
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
          value: "bombing-reason-of-avoidance-post...I would not want to offend someone",
          text: "...I would not want to offend someone",
        },
        {
          value: "bombing-reason-of-avoidance-post...I would not want to be offended by someone",
          text: "...I would not want to be offended by someone",
        },
        {
          value:
            "bombing-reason-of-avoidance-post...I would not want to be in an awkward, tense, or confrontational situation",
          text: "...I would not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value:
            "bombing-reason-of-avoidance-post...I would not want to deal with emotional distress or fatigue",
          text: "...I would not want to deal with emotional distress or fatigue",
        },
        {
          value:
            "bombing-reason-of-avoidance-post...I would not want people judging me negatively or misunderstanding me",
          text: "...I would not want people judging me negatively or misunderstanding me",
        },
        {
          value:
            "bombing-reason-of-avoidance-post...I would not want to come off as ignorant or uneducated",
          text: "...I would not want to come off as ignorant or uneducated",
        },
        {
          value: "bombing-reason-of-avoidance-post...I have had previous negative experiences",
          text: "...I have had previous negative experiences",
        },
        {
          value:
            "bombing-reason-of-avoidance-post...I would not want to incur social repercussions",
          text: "...I would not want to incur social repercussions",
        },
        {
          value:
            "bombing-reason-of-avoidance-post...I would be afraid of feeling disempowered, unheard, or invalidated",
          text: "...I would be afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "bombing-reason-of-avoidance-post...I would be afraid of feeling unsafe",
          text: "...I would be afraid of feeling unsafe",
        },
      ],
    },
  ],
};
