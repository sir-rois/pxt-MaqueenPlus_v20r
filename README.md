# Maqueen Plus V2r

## Introduction

This is the latest version of Maqueen Plus, a programming robot for STEAM education. Optimized with more expansion ports, larger capacity power supply and larger body, the Maqueen Plus V2.0r can be perfectly compatible with more peripheral components like HuskyLens AI camera and Maqueen Mechanic kits, which makes it an accessible STEAM robot teaching tool for primary and secondary students. Besides, it can be not only suitable for classroom teaching, but also can be used for after-school extended exercises and robot competitions. Besides all the functions of Maqueen Lite, it offers richer and more flexible functions and stronger performance. Whether you have ever used Maqueen series products or not, you'll find it very easy to get started.

[Tutorial Links](https://wiki.dfrobot.com/SKU_MBT0021-EN_Maqueen_Plus_STEAM_Programming_Educational_Robot#target_0)

## Basic usage

* forward

```blocks

maqueenPlusV2r.I2CInit()
basic.forever(function () {
    maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.AllMotor, maqueenPlusV2r.MyEnumDir.Forward, 100)
})

```

* Backward

```blocks

maqueenPlusV2r.I2CInit()
basic.forever(function on_forever() {
    maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.AllMotor, maqueenPlusV2r.MyEnumDir.Backward, 100)
})

```

* Blinking LED

```blocks

maqueenPlusV2r.I2CInit()
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.AllMotor, maqueenPlusV2r.MyEnumDir.Forward, 255)
basic.forever(function () {
    maqueenPlusV2r.setIndexColor(maqueenPlusV2r.ledRange(0, 3), maqueenPlusV2r.NeoPixelColors.Red)
    basic.pause(1000)
    maqueenPlusV2r.setIndexColor(maqueenPlusV2r.ledRange(0, 3), maqueenPlusV2r.NeoPixelColors.Blue)
    basic.pause(1000)
})

```

* Light Sensing Robot

```blocks

maqueenPlusV2r.I2CInit()
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})

```

* Ultrasonic

```blocks

maqueenPlusV2r.I2CInit()
basic.forever(function () {
    basic.showNumber(maqueenPlusV2r.readUltrasonic(DigitalPin.P13, DigitalPin.P14))
})

```

* Line-tracking Robot

```blocks

maqueenPlusV2r.I2CInit()
basic.forever(function () {
    if (maqueenPlusV2r.readLineSensorState(maqueenPlusV2r.MyEnumLineSensor.SensorM) == 1) {
        maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.AllMotor, maqueenPlusV2r.MyEnumDir.Forward, 100)
    } else {
        if (maqueenPlusV2r.readLineSensorState(maqueenPlusV2r.MyEnumLineSensor.SensorL1) == 0 && maqueenPlusV2r.readLineSensorState(maqueenPlusV2r.MyEnumLineSensor.SensorR1) == 1) {
            maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.LeftMotor, maqueenPlusV2r.MyEnumDir.Forward, 160)
            maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.RightMotor, maqueenPlusV2r.MyEnumDir.Forward, 30)
        }
        if (maqueenPlusV2r.readLineSensorState(maqueenPlusV2r.MyEnumLineSensor.SensorL1) == 1 && maqueenPlusV2r.readLineSensorState(maqueenPlusV2r.MyEnumLineSensor.SensorR1) == 0) {
            maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.RightMotor, maqueenPlusV2r.MyEnumDir.Forward, 160)
            maqueenPlusV2r.controlMotor(maqueenPlusV2r.MyEnumMotor.LeftMotor, maqueenPlusV2r.MyEnumDir.Forward, 30)
        }
    }
})

```
## License

MIT

Copyright (c) 2020, microbit/micropython Chinese community

## Supported targets

* for PXT/microbit


```package
maqueenPlusV2r=github:sir-rois/pxt-MaqueenPlus_v20r
```
