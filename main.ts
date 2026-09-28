input.onButtonPressed(Button.A, function () {
    running = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showIcon(IconNames.Surprised)
})
input.onButtonPressed(Button.B, function () {
    running = false
    basic.showIcon(IconNames.No)
})
let running = false
basic.showIcon(IconNames.No)
running = false
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
loops.everyInterval(100, function () {
    if (running) {
        datalogger.log(
        datalogger.createCV("ax", input.acceleration(Dimension.X)),
        datalogger.createCV("ay", input.acceleration(Dimension.Y)),
        datalogger.createCV("az", input.acceleration(Dimension.Z)),
        datalogger.createCV("as", input.acceleration(Dimension.Strength)),
        datalogger.createCV("mx", input.magneticForce(Dimension.X)),
        datalogger.createCV("my", input.magneticForce(Dimension.Y)),
        datalogger.createCV("mz", input.magneticForce(Dimension.Z)),
        datalogger.createCV("ms", input.magneticForce(Dimension.Strength)),
        datalogger.createCV("pitch", input.rotation(Rotation.Pitch)),
        datalogger.createCV("roll", input.rotation(Rotation.Roll))
        )
    }
})
