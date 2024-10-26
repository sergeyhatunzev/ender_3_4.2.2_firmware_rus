module.exports = {
    extends: "builds/baseLin.js",
    include: "builds/features/autoLevel.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-auto_level_7x7_lin-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-auto_level_7x7_lin-{{uid}}"
    },
    configuration: {
        disable: [
            "GRID_MAX_POINTS_X",
            "DISPLAY_CHARSET_HD44780",
            "LCD_LANGUAGE"
        ],
        enable: [
            ["GRID_MAX_POINTS_X", 7],
            ["DISPLAY_CHARSET_HD44780", "CYRILLIC"],
            ["LCD_LANGUAGE", "ru"] // оставляем "ru" как строку в скрипте
        ]
    }
};
