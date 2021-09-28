basic.forever(function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (24 <= input.temperature() && 25 >= input.temperature()) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (26 <= input.temperature() && 27 >= input.temperature()) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
