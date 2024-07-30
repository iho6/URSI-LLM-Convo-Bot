import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "corsi-blocks";
    readonly parameters: {
        /**
         * An array of block indexes that specify the order of the sequence to be displayed. For example,
         * [0, 1, 2, 3, 4] would display the first 5 blocks in the order they appear in the blocks parameter.
         */
        readonly sequence: {
            readonly type: ParameterType.INT;
            readonly default: any;
            readonly array: true;
        };
        /**
         * An array of objects that specify the x and y coordinates of each block. The coordinates represent the center
         * of the block. The coordinates are specified as percentages of the width and height of the display. For example,
         * {x: 50, y: 50} would place the block in the center of the display.
         *
         * The default value is an array of nine blocks that approximates the layout of the original Corsi blocks task.
         */
        readonly blocks: {
            readonly type: ParameterType.COMPLEX;
            readonly array: true;
            readonly default: readonly [{
                readonly y: 80;
                readonly x: 45;
            }, {
                readonly y: 94;
                readonly x: 80;
            }, {
                readonly y: 70;
                readonly x: 20;
            }, {
                readonly y: 60;
                readonly x: 70;
            }, {
                readonly y: 50;
                readonly x: 35;
            }, {
                readonly y: 40;
                readonly x: 6;
            }, {
                readonly y: 45;
                readonly x: 94;
            }, {
                readonly y: 25;
                readonly x: 60;
            }, {
                readonly y: 6;
                readonly x: 47;
            }];
            readonly nested: {
                readonly x: {
                    readonly type: ParameterType.INT;
                    readonly default: any;
                };
                readonly y: {
                    readonly type: ParameterType.INT;
                    readonly default: any;
                };
            };
        };
        /**
         * The size of the blocks as a percentage of the overall display size.
         */
        readonly block_size: {
            readonly type: ParameterType.INT;
            readonly default: 12;
        };
        /**
         * The width of the display, specified as a valid CSS measurement.
         */
        readonly display_width: {
            readonly type: ParameterType.STRING;
            readonly default: "400px";
        };
        /**
         * The height of the display, specified as a valid CSS measurement.
         */
        readonly display_height: {
            readonly type: ParameterType.STRING;
            readonly default: "400px";
        };
        /**
         * An optional text prompt that can be shown below the display area.
         */
        readonly prompt: {
            readonly type: ParameterType.STRING;
            readonly default: any;
        };
        /**
         * The mode of the trial. If 'display', then the sequence is displayed and the trial ends after
         * the sequence is complete. If 'input', then the use must click on the blocks in the correct order.
         */
        readonly mode: {
            readonly type: ParameterType.STRING;
            readonly default: "display";
            readonly options: readonly ["display", "input"];
        };
        /**
         * The duration, in milliseconds, between each block in the sequence.
         */
        readonly sequence_gap_duration: {
            readonly type: ParameterType.INT;
            readonly default: 250;
        };
        /**
         * The duration, in milliseconds, that each block is displayed during the sequence.
         */
        readonly sequence_block_duration: {
            readonly type: ParameterType.INT;
            readonly default: 1000;
        };
        /**
         * The duration, in milliseconds, to show the blocks before the sequence begins.
         */
        readonly pre_stim_duration: {
            readonly type: ParameterType.INT;
            readonly default: 500;
        };
        /**
         * The duration, in milliseconds, to show the feedback response animation
         * during input mode.
         */
        readonly response_animation_duration: {
            readonly type: ParameterType.INT;
            readonly default: 500;
        };
        /**
         * The color of unselected, unhighlighted blocks.
         */
        readonly block_color: {
            readonly type: ParameterType.STRING;
            readonly default: "#555";
        };
        /**
         * The color of the highlighted block.
         */
        readonly highlight_color: {
            readonly type: ParameterType.STRING;
            readonly default: "#ff0000";
        };
        /**
         * The color of correct feedback.
         */
        readonly correct_color: {
            readonly type: ParameterType.STRING;
            readonly default: "#00ff00";
        };
        /**
         * The color of incorrect feedback.
         */
        readonly incorrect_color: {
            readonly type: ParameterType.STRING;
            readonly default: "#ff0000";
        };
    };
};
type Info = typeof info;
/**
 * **corsi-blocks**
 *
 * This plugin displays a sequence of blocks and then gets the
 * subject's response. The sequence can be displayed in either
 * 'display' mode or 'input' mode. In 'display' mode, the
 * sequence is displayed and the trial ends after the sequence
 * is complete. In 'input' mode, the subject must click on the
 * blocks in the correct order.
 *
 * @author Josh de Leeuw
 * @see {@link https://DOCUMENTATION_URL DOCUMENTATION LINK TEXT}
 */
declare class CorsiBlocksPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "corsi-blocks";
        readonly parameters: {
            /**
             * An array of block indexes that specify the order of the sequence to be displayed. For example,
             * [0, 1, 2, 3, 4] would display the first 5 blocks in the order they appear in the blocks parameter.
             */
            readonly sequence: {
                readonly type: ParameterType.INT;
                readonly default: any;
                readonly array: true;
            };
            /**
             * An array of objects that specify the x and y coordinates of each block. The coordinates represent the center
             * of the block. The coordinates are specified as percentages of the width and height of the display. For example,
             * {x: 50, y: 50} would place the block in the center of the display.
             *
             * The default value is an array of nine blocks that approximates the layout of the original Corsi blocks task.
             */
            readonly blocks: {
                readonly type: ParameterType.COMPLEX;
                readonly array: true;
                readonly default: readonly [{
                    readonly y: 80;
                    readonly x: 45;
                }, {
                    readonly y: 94;
                    readonly x: 80;
                }, {
                    readonly y: 70;
                    readonly x: 20;
                }, {
                    readonly y: 60;
                    readonly x: 70;
                }, {
                    readonly y: 50;
                    readonly x: 35;
                }, {
                    readonly y: 40;
                    readonly x: 6;
                }, {
                    readonly y: 45;
                    readonly x: 94;
                }, {
                    readonly y: 25;
                    readonly x: 60;
                }, {
                    readonly y: 6;
                    readonly x: 47;
                }];
                readonly nested: {
                    readonly x: {
                        readonly type: ParameterType.INT;
                        readonly default: any;
                    };
                    readonly y: {
                        readonly type: ParameterType.INT;
                        readonly default: any;
                    };
                };
            };
            /**
             * The size of the blocks as a percentage of the overall display size.
             */
            readonly block_size: {
                readonly type: ParameterType.INT;
                readonly default: 12;
            };
            /**
             * The width of the display, specified as a valid CSS measurement.
             */
            readonly display_width: {
                readonly type: ParameterType.STRING;
                readonly default: "400px";
            };
            /**
             * The height of the display, specified as a valid CSS measurement.
             */
            readonly display_height: {
                readonly type: ParameterType.STRING;
                readonly default: "400px";
            };
            /**
             * An optional text prompt that can be shown below the display area.
             */
            readonly prompt: {
                readonly type: ParameterType.STRING;
                readonly default: any;
            };
            /**
             * The mode of the trial. If 'display', then the sequence is displayed and the trial ends after
             * the sequence is complete. If 'input', then the use must click on the blocks in the correct order.
             */
            readonly mode: {
                readonly type: ParameterType.STRING;
                readonly default: "display";
                readonly options: readonly ["display", "input"];
            };
            /**
             * The duration, in milliseconds, between each block in the sequence.
             */
            readonly sequence_gap_duration: {
                readonly type: ParameterType.INT;
                readonly default: 250;
            };
            /**
             * The duration, in milliseconds, that each block is displayed during the sequence.
             */
            readonly sequence_block_duration: {
                readonly type: ParameterType.INT;
                readonly default: 1000;
            };
            /**
             * The duration, in milliseconds, to show the blocks before the sequence begins.
             */
            readonly pre_stim_duration: {
                readonly type: ParameterType.INT;
                readonly default: 500;
            };
            /**
             * The duration, in milliseconds, to show the feedback response animation
             * during input mode.
             */
            readonly response_animation_duration: {
                readonly type: ParameterType.INT;
                readonly default: 500;
            };
            /**
             * The color of unselected, unhighlighted blocks.
             */
            readonly block_color: {
                readonly type: ParameterType.STRING;
                readonly default: "#555";
            };
            /**
             * The color of the highlighted block.
             */
            readonly highlight_color: {
                readonly type: ParameterType.STRING;
                readonly default: "#ff0000";
            };
            /**
             * The color of correct feedback.
             */
            readonly correct_color: {
                readonly type: ParameterType.STRING;
                readonly default: "#00ff00";
            };
            /**
             * The color of incorrect feedback.
             */
            readonly incorrect_color: {
                readonly type: ParameterType.STRING;
                readonly default: "#ff0000";
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
}
export default CorsiBlocksPlugin;
