import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "rok";
    readonly parameters: {
        /** The valid keys that the subject can press to indicate a response. */
        readonly choices: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Choices";
            readonly default: "ALL_KEYS";
        };
        /** The correct keys for that trial. */
        readonly correct_choice: {
            readonly type: ParameterType.KEYS;
            readonly pretty_name: "Correct choice";
            readonly default: any;
        };
        /** The length of stimulus presentation. Zero for endless loop. */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Trial duration";
            readonly default: 0;
        };
        /** If true, then any valid key will end the trial. */
        readonly response_ends_trial: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response ends trial";
            readonly default: true;
        };
        /** The number of oriented objects per set in the stimulus. */
        readonly number_of_oobs: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Number of oriented objectes";
            readonly default: 300;
        };
        /** The direction of coherent motion in degrees (0 degre meaning right). */
        readonly coherent_movement_direction: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Coherent movement direction";
            readonly default: 0;
        };
        /** The orientation of the objects in degree (0 degree meaning right). */
        readonly coherent_orientation: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Coherent object orientation";
            readonly default: 0;
        };
        /** The percentage of oriented objects moving in the coherent direction. */
        readonly coherence_movement: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Movement coherence";
            readonly default: 50;
        };
        /** The percentage of objects that are oriented in the coherent orientation. */
        readonly coherence_orientation: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Orientation coherence";
            readonly default: 50;
        };
        /** The percentage of oriented objects moving in the direction opposite of the coherent direction. */
        readonly coherence_movement_opposite: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Opposite movement coherence";
            readonly default: 0;
        };
        /** The percentage of objects that are oriented opposite of the coherent orientation. */
        readonly coherence_orientation_opposite: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Opposite orientation coherence";
            readonly default: 0;
        };
        /** The movement speed of the oobs in (percentage of aperature_width)/second. */
        readonly movement_speed: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Movement Speed";
            readonly default: 10;
        };
        /** The percentage of randomisation in movement speed " +
             "(0 meaning all orientated objects move with speed defined in movement_speed," +
             " 100 meaning movement speeds from 0 to 2x movement_speed). */
        readonly movement_speed_randomisation: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Movement speed randomisation";
            readonly default: 0;
        };
        /** The size of the orientated objects in percentage of aperture_width. */
        readonly oob_size: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Object size";
            readonly default: 2;
        };
        /** The width of the aperture in pixels. */
        readonly aperture_width: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Aperture width";
            readonly default: 600;
        };
        /** The height of the aperture in pixels. */
        readonly aperture_height: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Aperture height";
            readonly default: 400;
        };
        /** The color of the dots. */
        readonly oob_color: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Dot color";
            readonly default: "white";
        };
        /** The background of the stimulus. */
        readonly background_color: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Background color";
            readonly default: "gray";
        };
        /** The presence of a border around the aperture. */
        readonly border: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Border";
            readonly default: false;
        };
        /** The thickness of the border in pixels. */
        readonly border_thickness: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Border width";
            readonly default: 1;
        };
        /**The color of the border. */
        readonly border_color: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Border Color";
            readonly default: 1;
        };
        /** Apperance of stimulus (0-triangles, 1-circle, 2-square, 3-origami_birds, 4-image). */
        readonly stimulus_type: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Stimulus type";
            readonly default: 0;
        };
        /** Shade of aperture (0 - rectangular, 1 - elliptic). */
        readonly aperture_shape: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "aperture shape";
            readonly default: 0;
        };
        /** Backgroundcolor of aperture */
        readonly aperture_background_color: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Background of aperture";
            readonly default: "#0000";
        };
        /** Type of random movement (0 direction is random but fixed, 1 movement direction of incoherent oobs changes over time). */
        readonly random_movement_type: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Random movement type";
            readonly default: 0;
        };
        /** Type of random movement (0 - orientation is random but fixed, 1 - orientation of incoherent oobs changes over time). */
        readonly random_orientation_type: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Random orientation type";
            readonly default: 0;
        };
        /** Number of apertures. If greater then one, other parameters of trial should be arrays. */
        readonly number_of_apertures: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Number of apertures";
            readonly default: 1;
        };
        /** If this parameter is set, number_of_objects is interpreted as average number_of_objects per density_unit_area (in pixels). */
        readonly density_unit_area: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Density area";
            readonly default: any;
        };
        /** Position of midpoint of aperture in x direction in percentage of window width (50 being middle). */
        readonly aperture_position_left: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Horizontal position of aperature";
            readonly default: 50;
        };
        /** Position of midpoint of aperture in y direction in percentage of window width (0 being top, 50 being middle, 100 being bot). */
        readonly aperture_position_top: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Vertical position of aperature";
            readonly default: 50;
        };
        /** Prompt that is presented above the stimulus. */
        readonly prompt: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Prompt";
            readonly default: any;
        };
        /** Fade the oobs on the edges of the aperture. */
        readonly fade_out: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Fade out on edges";
            readonly default: 0;
        };
        /** Pictures of stimuli, can be key-framed(animated) or randomised, see documentation. */
        readonly stimulus_image: {
            readonly type: ParameterType.IMAGE;
            readonly pretty_name: "Stimuli pictures";
            readonly default: any;
        };
        /** Background image, can be key-framed(animated) or randomised, see documentation. */
        readonly background_image: {
            readonly type: ParameterType.IMAGE;
            readonly pretty_name: "Background image";
            readonly default: any;
        };
        /** Number of keyframes in stimulus images. */
        readonly stimulus_image_keyframes: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Keyframes of stimulus pictures";
            readonly default: 1;
        };
        /** Number of keyframes in background pictures. */
        readonly background_image_keyframes: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Keframse of background pictures";
            readonly default: 1;
        };
        /** Time between keyframes. */
        readonly stimulus_keyframe_time: {
            readonly type: ParameterType.FLOAT;
            readonly pretty_name: "Keyframe time";
            readonly default: 0.1;
        };
        /** Mirror image instead of rotating (1 - x axis, 2 - y axis). */
        readonly stimulus_mirror: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Mirror image time";
            readonly default: 0;
        };
        /** Sets experiment to congruency mode: experiment_main_task has to be  set (0 = movement or 1 = orientation) if this is set to 1 or 2. The" +
             "congruency of the task does only apply to coherent oobs of main task. If this is set to 1 the remaining oobs secondary feature (the non task feature) is set at random." +
             "If this is set to 2 the remaining oobs have the same direction and orientation .*/
        readonly experiment_congruency_mode: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Experiment congruency mode";
            readonly default: 0;
        };
        /** Sets the main task when experiment is in congruency mode. The congruency of the other task then only" +
             "applies to non random oobs of main task. */
        readonly experiment_main_task: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Main task when experiment is set to congruency mode (0- movement, 1-orientation)";
            readonly default: 0;
        };
        /** Units in which size and speed of oobs is expressed (null - percentage of aperture width, px - pixels). */
        readonly units: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Units in which size and speed of oobs is expressed";
            readonly default: any;
        };
        /** Should stimuli be drawn on top of each other or intermixed **/
        readonly aperture_draw_mode: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "When in overlay draws stimuli of different apertures on top of each other. When in intermixed oobs all show up in one aperture intermixed";
            readonly default: "overlay";
        };
    };
};
type Info = typeof info;
/**
 * **ROK**
 *
 * jsPsych plugin for showing a random object kinematogram stimulus and recording a keyboard response
 *
 * @author Younes Strittmatter
 * @see {@link https://www.jspsych.org/plugins/jspsych-rok/ RDK plugin documentation on jspsych.org}
 * @copyright
 *
 *    We would appreciate it if you cited this paper when you use the ROK:
 *
 * ----------------------
 *
 * Copyright (C) 2021 Younes Strittmatter
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 */
declare class RokPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "rok";
        readonly parameters: {
            /** The valid keys that the subject can press to indicate a response. */
            readonly choices: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Choices";
                readonly default: "ALL_KEYS";
            };
            /** The correct keys for that trial. */
            readonly correct_choice: {
                readonly type: ParameterType.KEYS;
                readonly pretty_name: "Correct choice";
                readonly default: any;
            };
            /** The length of stimulus presentation. Zero for endless loop. */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Trial duration";
                readonly default: 0;
            };
            /** If true, then any valid key will end the trial. */
            readonly response_ends_trial: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response ends trial";
                readonly default: true;
            };
            /** The number of oriented objects per set in the stimulus. */
            readonly number_of_oobs: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Number of oriented objectes";
                readonly default: 300;
            };
            /** The direction of coherent motion in degrees (0 degre meaning right). */
            readonly coherent_movement_direction: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Coherent movement direction";
                readonly default: 0;
            };
            /** The orientation of the objects in degree (0 degree meaning right). */
            readonly coherent_orientation: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Coherent object orientation";
                readonly default: 0;
            };
            /** The percentage of oriented objects moving in the coherent direction. */
            readonly coherence_movement: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Movement coherence";
                readonly default: 50;
            };
            /** The percentage of objects that are oriented in the coherent orientation. */
            readonly coherence_orientation: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Orientation coherence";
                readonly default: 50;
            };
            /** The percentage of oriented objects moving in the direction opposite of the coherent direction. */
            readonly coherence_movement_opposite: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Opposite movement coherence";
                readonly default: 0;
            };
            /** The percentage of objects that are oriented opposite of the coherent orientation. */
            readonly coherence_orientation_opposite: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Opposite orientation coherence";
                readonly default: 0;
            };
            /** The movement speed of the oobs in (percentage of aperature_width)/second. */
            readonly movement_speed: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Movement Speed";
                readonly default: 10;
            };
            /** The percentage of randomisation in movement speed " +
                 "(0 meaning all orientated objects move with speed defined in movement_speed," +
                 " 100 meaning movement speeds from 0 to 2x movement_speed). */
            readonly movement_speed_randomisation: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Movement speed randomisation";
                readonly default: 0;
            };
            /** The size of the orientated objects in percentage of aperture_width. */
            readonly oob_size: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Object size";
                readonly default: 2;
            };
            /** The width of the aperture in pixels. */
            readonly aperture_width: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Aperture width";
                readonly default: 600;
            };
            /** The height of the aperture in pixels. */
            readonly aperture_height: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Aperture height";
                readonly default: 400;
            };
            /** The color of the dots. */
            readonly oob_color: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Dot color";
                readonly default: "white";
            };
            /** The background of the stimulus. */
            readonly background_color: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Background color";
                readonly default: "gray";
            };
            /** The presence of a border around the aperture. */
            readonly border: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Border";
                readonly default: false;
            };
            /** The thickness of the border in pixels. */
            readonly border_thickness: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Border width";
                readonly default: 1;
            };
            /**The color of the border. */
            readonly border_color: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Border Color";
                readonly default: 1;
            };
            /** Apperance of stimulus (0-triangles, 1-circle, 2-square, 3-origami_birds, 4-image). */
            readonly stimulus_type: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Stimulus type";
                readonly default: 0;
            };
            /** Shade of aperture (0 - rectangular, 1 - elliptic). */
            readonly aperture_shape: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "aperture shape";
                readonly default: 0;
            };
            /** Backgroundcolor of aperture */
            readonly aperture_background_color: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Background of aperture";
                readonly default: "#0000";
            };
            /** Type of random movement (0 direction is random but fixed, 1 movement direction of incoherent oobs changes over time). */
            readonly random_movement_type: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Random movement type";
                readonly default: 0;
            };
            /** Type of random movement (0 - orientation is random but fixed, 1 - orientation of incoherent oobs changes over time). */
            readonly random_orientation_type: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Random orientation type";
                readonly default: 0;
            };
            /** Number of apertures. If greater then one, other parameters of trial should be arrays. */
            readonly number_of_apertures: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Number of apertures";
                readonly default: 1;
            };
            /** If this parameter is set, number_of_objects is interpreted as average number_of_objects per density_unit_area (in pixels). */
            readonly density_unit_area: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Density area";
                readonly default: any;
            };
            /** Position of midpoint of aperture in x direction in percentage of window width (50 being middle). */
            readonly aperture_position_left: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Horizontal position of aperature";
                readonly default: 50;
            };
            /** Position of midpoint of aperture in y direction in percentage of window width (0 being top, 50 being middle, 100 being bot). */
            readonly aperture_position_top: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Vertical position of aperature";
                readonly default: 50;
            };
            /** Prompt that is presented above the stimulus. */
            readonly prompt: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Prompt";
                readonly default: any;
            };
            /** Fade the oobs on the edges of the aperture. */
            readonly fade_out: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Fade out on edges";
                readonly default: 0;
            };
            /** Pictures of stimuli, can be key-framed(animated) or randomised, see documentation. */
            readonly stimulus_image: {
                readonly type: ParameterType.IMAGE;
                readonly pretty_name: "Stimuli pictures";
                readonly default: any;
            };
            /** Background image, can be key-framed(animated) or randomised, see documentation. */
            readonly background_image: {
                readonly type: ParameterType.IMAGE;
                readonly pretty_name: "Background image";
                readonly default: any;
            };
            /** Number of keyframes in stimulus images. */
            readonly stimulus_image_keyframes: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Keyframes of stimulus pictures";
                readonly default: 1;
            };
            /** Number of keyframes in background pictures. */
            readonly background_image_keyframes: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Keframse of background pictures";
                readonly default: 1;
            };
            /** Time between keyframes. */
            readonly stimulus_keyframe_time: {
                readonly type: ParameterType.FLOAT;
                readonly pretty_name: "Keyframe time";
                readonly default: 0.1;
            };
            /** Mirror image instead of rotating (1 - x axis, 2 - y axis). */
            readonly stimulus_mirror: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Mirror image time";
                readonly default: 0;
            };
            /** Sets experiment to congruency mode: experiment_main_task has to be  set (0 = movement or 1 = orientation) if this is set to 1 or 2. The" +
                 "congruency of the task does only apply to coherent oobs of main task. If this is set to 1 the remaining oobs secondary feature (the non task feature) is set at random." +
                 "If this is set to 2 the remaining oobs have the same direction and orientation .*/
            readonly experiment_congruency_mode: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Experiment congruency mode";
                readonly default: 0;
            };
            /** Sets the main task when experiment is in congruency mode. The congruency of the other task then only" +
                 "applies to non random oobs of main task. */
            readonly experiment_main_task: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Main task when experiment is set to congruency mode (0- movement, 1-orientation)";
                readonly default: 0;
            };
            /** Units in which size and speed of oobs is expressed (null - percentage of aperture width, px - pixels). */
            readonly units: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Units in which size and speed of oobs is expressed";
                readonly default: any;
            };
            /** Should stimuli be drawn on top of each other or intermixed **/
            readonly aperture_draw_mode: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "When in overlay draws stimuli of different apertures on top of each other. When in intermixed oobs all show up in one aperture intermixed";
                readonly default: "overlay";
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
}
export default RokPlugin;
