input.onButtonPressed(Button.A, function () {
    running = true
})
input.onButtonPressed(Button.AB, function () {
    reset_timer = input.runningTime()
    if (reset == 1) {
        datalogger.deleteLog()
        basic.showLeds(`
            # . . . #
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        reset = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    running = false
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (input.runningTime() - reset_timer <= 3000) {
        reset = 1
    }
})
let reset_timer = 0
let reset = 0
let running = false
running = false
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
input.setAccelerometerRange(AcceleratorRange.TwoG)
input.setSoundThreshold(SoundThreshold.Loud, 128)
reset = 0
reset_timer = input.runningTimeMicros()
loops.everyInterval(100, function () {
    if (running) {
        datalogger.log(
        datalogger.createCV("ax", input.acceleration(Dimension.X)),
        datalogger.createCV("ay", input.acceleration(Dimension.Y)),
        datalogger.createCV("az", input.acceleration(Dimension.Z)),
        datalogger.createCV("light", input.lightLevel()),
        datalogger.createCV("mx", input.magneticForce(Dimension.X)),
        datalogger.createCV("my", input.magneticForce(Dimension.Y)),
        datalogger.createCV("mz", input.magneticForce(Dimension.Z)),
        datalogger.createCV("sound", input.soundLevel()),
        datalogger.createCV("temp", input.temperature())
        )
    }
})
