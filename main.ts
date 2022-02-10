pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let start = false
let doba = 0
control.inBackground(function zacatek() {
    
    let doba = randint(3000, 10000)
    basic.pause(doba)
    basic.showString("S")
    music.playTone(Note.C, music.beat(1500))
    start = true
})
basic.forever(function on_forever() {
    console.logValue("P1", input.pinIsPressed(TouchPin.P1))
    console.logValue("P2", input.pinIsPressed(TouchPin.P2))
    //  is_pin1= pins.digitalReadPin(DigitalPin.P1) == 0
    //  is_pin2 = pins.digitalReadPin(DigitalPin.P2) == 0
    if (input.pinIsPressed(TouchPin.P1) == true) {
        basic.showNumber(1)
        basic.pause(5000)
        control.reset()
    }
    
    if (input.pinIsPressed(TouchPin.P2) == true) {
        basic.showNumber(2)
        basic.pause(5000)
        control.reset()
    }
    
    if (input.pinIsPressed(TouchPin.P1) && input.pinIsPressed(TouchPin.P2) == true) {
        basic.showString("R")
        basic.pause(5000)
        control.reset()
    }
    
})
