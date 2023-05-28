input.onButtonPressed(Button.A, function () {
    seznam += 1
    if (seznam <= 0) {
        seznam = 25
    } else if (seznam >= 26) {
        seznam = 0
    }
})
input.onButtonPressed(Button.B, function () {
    seznam += -1
    if (seznam <= 0) {
        seznam = 25
    } else if (seznam >= 26) {
        seznam = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showString("" + (input2))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (seznam == 0) {
        input2 = "" + input2 + "A"
    } else if (seznam == 1) {
        input2 = "" + input2 + "B"
    } else if (seznam == 2) {
        input2 = "" + input2 + "C"
    } else if (seznam == 3) {
        input2 = "" + input2 + "D"
    } else if (seznam == 4) {
        input2 = "" + input2 + "E"
    } else if (seznam == 5) {
        input2 = "" + input2 + "F"
    } else if (seznam == 6) {
        input2 = "" + input2 + "G"
    } else if (seznam == 7) {
        input2 = "" + input2 + "H"
    } else if (seznam == 8) {
        input2 = "" + input2 + "I"
    } else if (seznam == 9) {
        input2 = "" + input2 + "J"
    } else if (seznam == 10) {
        input2 = "" + input2 + "K"
    } else if (seznam == 11) {
        input2 = "" + input2 + "L"
    } else if (seznam == 12) {
        input2 = "" + input2 + "M"
    } else if (seznam == 13) {
        input2 = "" + input2 + "N"
    } else if (seznam == 14) {
        input2 = "" + input2 + "O"
    } else if (seznam == 15) {
        input2 = "" + input2 + "P"
    } else if (seznam == 16) {
        input2 = "" + input2 + "Q"
    } else if (seznam == 17) {
        input2 = "" + input2 + "R"
    } else if (seznam == 18) {
        input2 = "" + input2 + "S"
    } else if (seznam == 19) {
        input2 = "" + input2 + "T"
    } else if (seznam == 20) {
        input2 = "" + input2 + "U"
    } else if (seznam == 21) {
        input2 = "" + input2 + "V"
    } else if (seznam == 22) {
        input2 = "" + input2 + "W"
    } else if (seznam == 23) {
        input2 = "" + input2 + "X"
    } else if (seznam == 24) {
        input2 = "" + input2 + "Y"
    } else if (seznam == 25) {
        input2 = "" + input2 + "Z"
    }
})
let seznam = 0
let input2 = ""
basic.showString("MAX 10 ZNAKU")
input2 = ""
seznam = 0
let textový_seznam = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
basic.forever(function () {
    basic.showString("" + (textový_seznam[seznam]))
})
