module.exports = {
    extends: "builds/base.js",
    include: "builds/features/autoLevel.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-3DTOUCH_5x5_lin-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-3DTOUCH_5x5_lin-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5]
        ]
    }
};
