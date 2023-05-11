let DISTANCIA = maqueen.Ultrasonic(PingUnit.Centimeters)
basic.forever(function () {
    DISTANCIA = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (DISTANCIA > 0 && DISTANCIA < 10) {
        maqueen.servoRun(maqueen.Servos.S1, 102)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
})
