input.onPinPressed(TouchPin.P0, function () {
    showTempr(0)
})
function checkTemp (tempr: number) {
    if (tempr < 25) {
        music.startMelody(sound_effects[0], MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
    } else {
        music.startMelody(sound_effects[1], MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.No)
        basic.pause(4500)
    }
    basic.clearScreen()
    is_running = false
}
input.onPinPressed(TouchPin.P2, function () {
    showTempr(2)
})
function convertTempr (_type: number, tempr: number) {
    if (_type == 2) {
        return tempr + 273
    } else if (_type == 1) {
        return tempr * 1.8 + 32
    } else {
        return tempr
    }
}
function showTempr (_type: number) {
    if (!(is_running)) {
        is_running = true
        tempr = input.temperature()
        for (let char of convertToText(Math.round(convertTempr(_type, tempr)))) {
            num_char_map[parseFloat(char)].scrollImage(1, 200)
        }
        tempr_char_map[_type].scrollImage(1, 200)
        basic.pause(500)
        basic.clearScreen()
        checkTemp(tempr)
    }
}
input.onPinPressed(TouchPin.P1, function () {
    showTempr(1)
})
let sound_effects: string[][] = []
let tempr_char_map: Image[] = []
let num_char_map: Image[] = []
let is_running = false
let tempr = 0
tempr = input.temperature()
is_running = false
music.setTempo(100)
num_char_map = [images.createImage(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `), images.createImage(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `), images.createImage(`
    . # # # .
    . . . # .
    . # # # .
    . # . . .
    . # # # .
    `), images.createImage(`
    . # # # .
    . . . # .
    . # # # .
    . . . # .
    . # # # .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . # . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . . . # .
    . . . # .
    . . . # .
    . . . # .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . . . # .
    . # # # .
    `)]
tempr_char_map = [images.createBigImage(`
    . # # # . # # # # .
    . # . # . # . . . .
    . # # # . # . . . .
    . . . . . # . . . .
    . . . . . # # # # .
    `), images.createBigImage(`
    . # # # . # # # # .
    . # . # . # . . . .
    . # # # . # # # . .
    . . . . . # . . . .
    . . . . . # . . . .
    `), images.createImage(`
    . # . . #
    . # . # .
    . # # . .
    . # . # .
    . # . . #
    `)]
sound_effects = [["G6:2", "C7:1", "A6:2", "B6:1", "C7:2", "E6:1", "C7:4"], ["C7", "", "C7", "", "C7", "", "C7"]]
