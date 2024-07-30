import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "audio-multi-response";
    readonly parameters: {
        /** The HTML string to be displayed. */
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
        /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
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
        /** Any content here will be displayed below the stimulus. */
        readonly prompt: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Prompt";
            readonly default: any;
        };
        /** Whether to display the prompt above the buttons. */
        readonly prompt_above_buttons: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Prompt above buttons";
            readonly default: false;
        };
        /** How long to show trial before it ends. */
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
        /** If true, trial will end when subject makes a response. */
        readonly response_ends_trial: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response ends trial";
            readonly default: true;
        };
        /** If true, then the trial will end as soon as the audio file finishes playing. */
        readonly trial_ends_after_audio: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Trial ends after audio";
            readonly default: false;
        };
        /** If true, then responses are allowed while the audio is playing. If false, then the audio must finish playing before a response is accepted. */
        readonly response_allowed_while_playing: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response allowed while playing";
            readonly default: true;
        };
    };
};
type Info = typeof info;
/**
 * **audio-multi-response**
 * jsPsych plugin for playing an audio file and getting a button or keyboard response
 * @author Adam Richie-Halford
 * @see {@link https://www.jspsych.org/plugins/jspsych-audio-multi-response/ audio-multi-response plugin documentation on jspsych.org}
 */
declare class AudioMultiResponsePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "audio-multi-response";
        readonly parameters: {
            /** The HTML string to be displayed. */
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
            /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
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
            /** Any content here will be displayed below the stimulus. */
            readonly prompt: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Prompt";
                readonly default: any;
            };
            /** Whether to display the prompt above the buttons. */
            readonly prompt_above_buttons: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Prompt above buttons";
                readonly default: false;
            };
            /** How long to show trial before it ends. */
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
            /** If true, trial will end when subject makes a response. */
            readonly response_ends_trial: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response ends trial";
                readonly default: true;
            };
            /** If true, then the trial will end as soon as the audio file finishes playing. */
            readonly trial_ends_after_audio: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Trial ends after audio";
                readonly default: false;
            };
            /** If true, then responses are allowed while the audio is playing. If false, then the audio must finish playing before a response is accepted. */
            readonly response_allowed_while_playing: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response allowed while playing";
                readonly default: true;
            };
        };
    };
    private audio;
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>, on_load: () => void): Promise<unknown>;
    simulate(trial: TrialType<Info>, simulation_mode: any, simulation_options: any, load_callback: () => void): void;
    private create_simulation_data;
    private simulate_data_only;
    private simulate_visual;
}
export default AudioMultiResponsePlugin;
