import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "video-several-keyboard-responses";
    readonly parameters: {
        /** Array of the video file(s) to play. Video can be provided in multiple file formats for better cross-browser support. */
        readonly stimulus: {
            readonly type: ParameterType.VIDEO;
            readonly pretty_name: "Video";
            readonly default: any;
            readonly array: true;
        };
        /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
        readonly choices: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Choices";
            readonly default: "ALL_KEYS";
        };
        /** Any content here will be displayed below the stimulus. */
        readonly prompt: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Prompt";
            readonly default: any;
        };
        /** The width of the video in pixels. */
        readonly width: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Width";
            readonly default: "";
        };
        /** The height of the video display in pixels. */
        readonly height: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Height";
            readonly default: "";
        };
        /** If true, the video will begin playing as soon as it has loaded. */
        readonly autoplay: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Autoplay";
            readonly default: true;
        };
        /** If true, the subject will be able to pause the video or move the playback to any point in the video. */
        readonly controls: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Controls";
            readonly default: false;
        };
        /** Time to start the clip. If null (default), video will start at the beginning of the file. */
        readonly start: {
            readonly type: ParameterType.FLOAT;
            readonly pretty_name: "Start";
            readonly default: any;
        };
        /** Time to stop the clip. If null (default), video will stop at the end of the file. */
        readonly stop: {
            readonly type: ParameterType.FLOAT;
            readonly pretty_name: "Stop";
            readonly default: any;
        };
        /** The playback rate of the video. 1 is normal, <1 is slower, >1 is faster. */
        readonly rate: {
            readonly type: ParameterType.FLOAT;
            readonly pretty_name: "Rate";
            readonly default: 1;
        };
        /** If true, the trial will end immediately after the video finishes playing. */
        readonly trial_ends_after_video: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "End trial after video finishes";
            readonly default: false;
        };
        /** How long to show trial before it ends. */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Trial duration";
            readonly default: any;
        };
        /** If true, the trial will end when subject makes a response. */
        readonly response_ends_trial: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response ends trial";
            readonly default: true;
        };
        /** If true, then responses are allowed while the video is playing. If false, then the video must finish playing before a response is accepted. */
        readonly response_allowed_while_playing: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response allowed while playing";
            readonly default: true;
        };
        /** If true, multiple responses are recorded. If false, only the first response will be recorded. */
        readonly multiple_responses_allowed: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Multiple responses allowed";
            readonly default: true;
        };
    };
};
type Info = typeof info;
/**
 * **video-several-keyboard-responses**
 *
 * jsPsych plugin for playing a video file and getting several keyboard responses, based on @see {@link https://www.jspsych.org/plugins/jspsych-video-several-keyboard-responses/ video-several-keyboard-responses plugin documentation on jspsych.org}
 *
 * @author marianylund
 * @see {@link https://www.jspsych.org/plugins/jspsych-video-several-keyboard-responses/ video-several-keyboard-responses plugin documentation on jspsych.org}
 */
declare class VideoSeveralKeyboardResponsesPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "video-several-keyboard-responses";
        readonly parameters: {
            /** Array of the video file(s) to play. Video can be provided in multiple file formats for better cross-browser support. */
            readonly stimulus: {
                readonly type: ParameterType.VIDEO;
                readonly pretty_name: "Video";
                readonly default: any;
                readonly array: true;
            };
            /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
            readonly choices: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Choices";
                readonly default: "ALL_KEYS";
            };
            /** Any content here will be displayed below the stimulus. */
            readonly prompt: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Prompt";
                readonly default: any;
            };
            /** The width of the video in pixels. */
            readonly width: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Width";
                readonly default: "";
            };
            /** The height of the video display in pixels. */
            readonly height: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Height";
                readonly default: "";
            };
            /** If true, the video will begin playing as soon as it has loaded. */
            readonly autoplay: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Autoplay";
                readonly default: true;
            };
            /** If true, the subject will be able to pause the video or move the playback to any point in the video. */
            readonly controls: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Controls";
                readonly default: false;
            };
            /** Time to start the clip. If null (default), video will start at the beginning of the file. */
            readonly start: {
                readonly type: ParameterType.FLOAT;
                readonly pretty_name: "Start";
                readonly default: any;
            };
            /** Time to stop the clip. If null (default), video will stop at the end of the file. */
            readonly stop: {
                readonly type: ParameterType.FLOAT;
                readonly pretty_name: "Stop";
                readonly default: any;
            };
            /** The playback rate of the video. 1 is normal, <1 is slower, >1 is faster. */
            readonly rate: {
                readonly type: ParameterType.FLOAT;
                readonly pretty_name: "Rate";
                readonly default: 1;
            };
            /** If true, the trial will end immediately after the video finishes playing. */
            readonly trial_ends_after_video: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "End trial after video finishes";
                readonly default: false;
            };
            /** How long to show trial before it ends. */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Trial duration";
                readonly default: any;
            };
            /** If true, the trial will end when subject makes a response. */
            readonly response_ends_trial: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response ends trial";
                readonly default: true;
            };
            /** If true, then responses are allowed while the video is playing. If false, then the video must finish playing before a response is accepted. */
            readonly response_allowed_while_playing: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response allowed while playing";
                readonly default: true;
            };
            /** If true, multiple responses are recorded. If false, only the first response will be recorded. */
            readonly multiple_responses_allowed: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Multiple responses allowed";
                readonly default: true;
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
    simulate(trial: TrialType<Info>, simulation_mode: any, simulation_options: any, load_callback: () => void): void;
    private simulate_data_only;
    private simulate_visual;
    private create_simulation_data;
}
export default VideoSeveralKeyboardResponsesPlugin;
