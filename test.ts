maqueenPlusV2r.I2CInit()
maqueenPlusV2r.setBrightness(100)
basic.forever(function () {
    serial.writeLine("Turn on the left light, motor forward, RGB light red")
    maqueenPlusV2r.setIndexColor(maqueenPlusV2r.ledRange(1, 4), maqueenPlusV2r.NeoPixelColors.Red)
    maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.AllMotor, maqueenPlusV2r.MyEnumDir.Forward, 100)
    maqueenPlusV2r.controlLED(maqueenPlusV2r.MyEnumLed.LeftLed, maqueenPlusV2r.MyEnumSwitch.Open)
    basic.pause(2000)
    serial.writeLine("Turn on the right side light, motor back, RGB light yellow")
    maqueenPlusV2r.setIndexColor(maqueenPlusV2r.ledRange(1, 4), maqueenPlusV2r.NeoPixelColors.Yellow)
    maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.AllMotor, maqueenPlusV2r.MyEnumDir.Backward, 100)
    maqueenPlusV2r.controlLED(maqueenPlusV2r.MyEnumLed.LeftLed, maqueenPlusV2r.MyEnumSwitch.Close)
    maqueenPlusV2r.controlLED(maqueenPlusV2r.MyEnumLed.RightLed, maqueenPlusV2r.MyEnumSwitch.Open)
    basic.pause(2000)
    serial.writeLine("Turn on the side lights, motor forward, RGB light green")
    maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.AllMotor, maqueenPlusV2r.MyEnumDir.Forward, 100)
    maqueenPlusV2r.controlLED(maqueenPlusV2r.MyEnumLed.AllLed, maqueenPlusV2r.MyEnumSwitch.Open)
    maqueenPlusV2r.setIndexColor(maqueenPlusV2r.ledRange(1, 4), maqueenPlusV2r.NeoPixelColors.Green)
    basic.pause(2000)
    serial.writeLine("Printing sensor data")
    serial.writeLine("SensorL1 status:" + maqueenPlusV2r.readLineSensorState(maqueenPlusV2r.MyEnumLineSensor.SensorL1))
    serial.writeLine("SensorL1 ADC:" + maqueenPlusV2r.readLineSensorData(maqueenPlusV2r.MyEnumLineSensor.SensorL1))
    serial.writeLine("ultrasonic sensor:" + maqueenPlusV2r.readUltrasonic(DigitalPin.P13, DigitalPin.P14))
})
