DFRobotMaqueenPlusV2.onIrDatagram(function (message) {
    if (message == 12) {
        DFRobotMaqueenPlusV2.setIndexColor(1, 0xff00ff)
    }
})
let distance = 0
DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    if (distance < 30 && distance != 0) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
        DFRobotMaqueenPlusV2.showColor(0x00ff00)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(175, music.beat(BeatFraction.Whole))
        basic.pause(1000)
    } else {
        DFRobotMaqueenPlusV2.showColor(0xff0000)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 21)
    }
})
