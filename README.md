# Temperature Checker

This is a simple temperature checker made using micro::bit.

## Feature

- Support three temperature unit
  - Celcius
  - Fahrenheit
  - Kelvin
- Temperature suitability check
- Super simple to use

## How to use

When the checker started, press on either of the three pins below. Adjust the temperature scrollbar if needed. When any of the pins is pressed, the current temperature that has been converted to the temperature unit of your choice will slowly sroll into the screen from right to left followed by their corresponding symbol. Below are the corresponded temperature unit for each of the pins:

PIN NUM | UNIT
------- | ----------
0       | Celcius
1       | Fahrenheit
2       | Kelvin

After that, you'll see either a tick or an X showing out on the screen. The symbols will be followed by their corresponding custom sound effect. Their meaning are as shown below:

SYMBOL | MEANING
------ | ----------
X      | The temperature is higher than or equal to 25°C
TICK   | The temperature is lower than 25°C

NOTE: All the pins will be disabled when the texts and animations are running. They will be re-enabled when all the animation is finished.
