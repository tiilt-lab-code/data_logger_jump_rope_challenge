input.onButtonPressed(Button.A, function () {
    running = true
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
input.onButtonPressed(Button.B, function () {
    running = false
})
let running = false
running = false
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
basic.forever(function () {
	
})
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
