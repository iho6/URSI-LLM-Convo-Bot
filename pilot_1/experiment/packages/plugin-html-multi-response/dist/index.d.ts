import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "html-multi-response";
    readonly parameters: {
        /** The HTML string to be displayed */
        readonly stimulus: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Stimulus";
            readonly default: any;
        };
        /** Array containing the label(s) for the button(s). */
        readonly button_choices: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Button Choices";
            readonly default: readonly [];
            readonly array: true;
        };
        /**
         * Array containing the key(s) the subject is allowed to press to respond to the stimulus.
         */
        readonly keyboard_choices: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Keyboard Choices";
            readonly default: "NO_KEYS";
        };
        /** The HTML for creating button. Can create own style. Use the "%choice%" string to indicate where the label from the choices parameter should be inserted. */
        readonly button_html: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Button HTML";
            readonly default: "<button class=\"jspsych-btn\">%choice%</button>";
            readonly array: true;
        };
        /** Any content here will be displayed under the button(s). */
        readonly prompt: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Prompt";
            readonly default: any;
        };
        /** How long to show the stimulus. */
        readonly stimulus_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Stimulus duration";
            readonly default: any;
        };
        /** How long to show the trial. */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Trial duration";
            readonly default: any;
        };
        /** The vertical margin of the button. */
        readonly margin_vertical: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Margin vertical";
            readonly default: "0px";
        };
        /** The horizontal margin of the button. */
        readonly margin_horizontal: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Margin horizontal";
            readonly default: "8px";
        };
        /** If true, then trial will end when user responds. */
        readonly response_ends_trial: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response ends trial";
            readonly default: true;
        };
    };
};
type Info = typeof info;
/**
 * html-multi-response
 * jsPsych plugin for displaying an html stimulus and getting a response
 * @author Adam Richie-Halford
 * @see {@link https://www.jspsych.org/plugins/jspsych-html-multi-response/ html-multi-response plugin documentation on jspsych.org}
 */
declare class HtmlMultiResponsePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "html-multi-response";
        readonly parameters: {
            /** The HTML string to be displayed */
            readonly stimulus: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Stimulus";
                readonly default: any;
            };
            /** Array containing the label(s) for the button(s). */
            readonly button_choices: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Button Choices";
                readonly default: readonly [];
                readonly array: true;
            };
            /**
             * Array containing the key(s) the subject is allowed to press to respond to the stimulus.
             */
            readonly keyboard_choices: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Keyboard Choices";
                readonly default: "NO_KEYS";
            };
            /** The HTML for creating button. Can create own style. Use the "%choice%" string to indicate where the label from the choices parameter should be inserted. */
            readonly button_html: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Button HTML";
                readonly default: "<button class=\"jspsych-btn\">%choice%</button>";
                readonly array: true;
            };
            /** Any content here will be displayed under the button(s). */
            readonly prompt: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Prompt";
                readonly default: any;
            };
            /** How long to show the stimulus. */
            readonly stimulus_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Stimulus duration";
                readonly default: any;
            };
            /** How long to show the trial. */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Trial duration";
                readonly default: any;
            };
            /** The vertical margin of the button. */
            readonly margin_vertical: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Margin vertical";
                readonly default: "0px";
            };
            /** The horizontal margin of the button. */
            readonly margin_horizontal: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Margin horizontal";
                readonly default: "8px";
            };
            /** If true, then trial will end when user responds. */
            readonly response_ends_trial: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response ends trial";
                readonly default: true;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
    simulate(trial: TrialType<Info>, simulation_mode: any, simulation_options: any, load_callback: () => void): void;
    private create_simulation_data;
    private simulate_data_only;
    private simulate_visual;
}
export default HtmlMultiResponsePlugin;
