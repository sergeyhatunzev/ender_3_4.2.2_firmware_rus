module.exports = {
    extends: "builds/baseLin.js",
    include: "builds/features/manualBedMesh.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-manual_mesh_5x5_lin-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-manual_mesh_5x5_lin-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5]
            ["NOZZLE_TO_PROBE_OFFSET", [20, 20, 0]]
            ["LCD_LANGUAGE", q`ru`]
        ]
    }
};
