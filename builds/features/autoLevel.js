module.exports = {
    partial: true,
    configuration: {
        enable: [
            "BLTOUCH",
            "AUTO_BED_LEVELING_BILINEAR",
            "Z_SAFE_HOMING",
            "USE_PROBE_FOR_Z_HOMING",
            ["Z_MIN_PROBE_PIN", q`PB1`],
            "LCD_BED_LEVELING",

            ["DEFAULT_LEVELING_FADE_HEIGHT", 20],
            ["NOZZLE_TO_PROBE_OFFSET", [22, 10, 0]],

            //M48 test
            "Z_MIN_PROBE_REPEATABILITY_TEST"
        ],
        disable: [
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"
        ]
    },
    configuration_adv: {
        enable: [
            "BABYSTEPPING",
            "BABYSTEP_ZPROBE_OFFSET",
            "PROBE_OFFSET_WIZARD",

            //symmetrical
            ["PROBING_MARGIN_LEFT", 72],
            ["PROBING_MARGIN_RIGHT", 30],
            ["PROBING_MARGIN_FRONT", -20],
            ["PROBING_MARGIN_BACK",  -20 ]
        ]
    }
};
