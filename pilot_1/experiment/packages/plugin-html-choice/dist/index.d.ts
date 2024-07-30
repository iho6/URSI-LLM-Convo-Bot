import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "html-choice";
    readonly parameters: {
        /** The HTML string to be displayed */
        readonly html_array: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Stimulus";
            readonly default: any;
        };
        /** How long to show the stimulus. */
        readonly stimulus_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Stimulus duration";
            readonly default: any;
        };
        /** How long the trial lasts. */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Trial duration";
            readonly default: any;
        };
        /** If true, trial will end when subject makes a response. */
        readonly response_ends_trial: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response ends trial";
            readonly default: true;
        };
        /** values that can be assigned to choices. */
        readonly values: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Values";
            readonly default: any;
        };
        /** Time the stimulus is shown after response (for example for animated feedback). */
        readonly time_after_response: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Time after response";
            readonly default: 0;
        };
    };
};
type Info = typeof info;
/**
 * html-choice
 * jsPsych plugin for displaying a stimulus and getting a choice
 * @author Younes Strittmatter
 */
declare class HtmlChoicePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "html-choice";
        readonly parameters: {
            /** The HTML string to be displayed */
            readonly html_array: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Stimulus";
                readonly default: any;
            };
            /** How long to show the stimulus. */
            readonly stimulus_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Stimulus duration";
                readonly default: any;
            };
            /** How long the trial lasts. */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Trial duration";
                readonly default: any;
            };
            /** If true, trial will end when subject makes a response. */
            readonly response_ends_trial: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response ends trial";
                readonly default: true;
            };
            /** values that can be assigned to choices. */
            readonly values: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Values";
                readonly default: any;
            };
            /** Time the stimulus is shown after response (for example for animated feedback). */
            readonly time_after_response: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Time after response";
                readonly default: 0;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
}
export default HtmlChoicePlugin;
