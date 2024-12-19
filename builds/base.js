module.exports = {
    extends: "builds/default.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-base-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Ender-3, zisismaras)"],
            // стандартное меню выравнивания стола
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            ["LCD_LANGUAGE", q`ru`],
            ["X_BED_SIZE",  235],
            ["Y_BED_SIZE",  235]
        ]
    },
    configuration_adv: {
        enable: [
            // OctoPrint
            "HOST_ACTION_COMMANDS",
            // Включаем NOZZLE_PARK_FEATURE
            "NOZZLE_PARK_FEATURE", // Нужно для работы ADVANCED_PAUSE_FEATURE
            // Включаем продвинутую паузу для замены филамента
            "ADVANCED_PAUSE_FEATURE"
        ]
    }
};
