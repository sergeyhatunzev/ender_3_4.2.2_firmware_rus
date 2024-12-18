

# Прошивка для Ender-3 4.2.2

Автоматические сборки [Marlin](https://github.com/MarlinFirmware/Marlin) для Ender-3 с платой Creality 4.2.2 (512K).  
Вы можете найти как стабильные, так и ночные сборки (`bugfix-2.1.x`) на странице релизов репозитория.  

**Важно**
* Убедитесь, что у вас плата 4.2.2 с 512K флеш-памяти перед установкой. Некоторые новые модели имеют 256K памяти. Подробнее об этом [здесь](https://github.com/MarlinFirmware/Marlin/issues/23596). Если у вас версия с 256K, можно форкнуть репозиторий и изменить `board_env`.
* Все сборки здесь используют стандартные драйверы шаговых двигателей `A4988`. Если у вас другие драйверы, можно форкнуть и изменить конфигурацию. Чтобы определить, какие у вас драйверы, посмотрите на отметку рядом со слотом для SD-карты. Подробнее [здесь](https://github.com/MarlinFirmware/Configurations/pull/633#issuecomment-995206382).
* Последняя протестированная версия прошивки — ` stable-2.1.2.4 7x7 lin

`.

## Сборки

### default

Стандартная конфигурация Marlin для Ender-3.

### base

Меню помощи при выравнивании стола с перемещением по углам. Удобнее, чем использовать gcode-файл или вручную перемещать.  
Также включает `HOST_ACTION_COMMANDS`, как требуется для OctoPrint.

### base_lin

base + [линейное опережение](https://marlinfw.org/docs/features/lin_advance.html).  
K-фактор линейного опережения установлен на `0`. Как найти и установить оптимальное значение, можно узнать из документации Marlin или видео на YouTube.  

### manual_mesh

[Ручное выравнивание сетки](https://marlinfw.org/docs/gcode/G029-mbl.html)  
Доступны 4 варианта:

* `manual_mesh_5x5` [base](#base) + ручное выравнивание сетки с сеткой 5x5
* `manual_mesh_5x5_lin` [base_lin](#base_lin) + ручное выравнивание сетки с сеткой 5x5
* `manual_mesh_7x7` [base](#base) + ручное выравнивание сетки с сеткой 7x7
* `manual_mesh_7x7_lin` [base_lin](#base_lin) + ручное выравнивание сетки с сеткой 7x7

### auto_level

[Автоматическое выравнивание](https://marlinfw.org/docs/gcode/G029-abl-bilinear.html)  
**Примечание**: Протестировано только с CR-touch, но BL-touch тоже должен работать. Для клонов 3D-touch требуется дополнительное исследование перед прошивкой. Если у вас другой тип датчика, потребуется другая конфигурация.  

Доступны 4 варианта:

* `auto_level_5x5` [base](#base) + автоматическое выравнивание с сеткой 5x5
* `auto_level_5x5_lin` [base_lin](#base_lin) + автоматическое выравнивание с сеткой 5x5
* `auto_level_7x7` [base](#base) + автоматическое выравнивание с сеткой 7x7
* `auto_level_7x7_lin` [base_lin](#base_lin) + автоматическое выравнивание с сеткой 7x7

Сетка настроена симметрично с отступом для 3d touch  
Все смещения зонда установлены на `0`. В сети есть много видео о том, как измерить и настроить их.  
В прошивке включен мастер смещения, чтобы упростить измерение Z-смещения.  

**Важно**: Сборка предполагает использование специального порта для BL-touch на плате с отключенным Z-stop. Если вы используете Z-stop порт для зонда, прошивка работать не будет.  

Включен тест точности [M48](https://marlinfw.org/docs/gcode/M048.html) на случай, если вы хотите проверить свой зонд.

## Создание собственной прошивки

Посмотрите [Marlin auto build](https://github.com/zisismaras/marlin_auto_build), если хотите автоматически собирать прошивку на GitHub.

ИСТОРИЯ ИЗМЕНЕНИЙ:
19.12.24 включил м600 (смена филамента во время печати)
