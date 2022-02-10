pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)


start = False
doba = 0

def zacatek():
    global start
    doba = randint(3000, 10000)
    basic.pause(doba)
    basic.show_string("S")
    music.play_tone(Note.C, music.beat(1500))
    start = True
control.in_background(zacatek)

def on_forever():
    console.log_value("P1", input.pin_is_pressed(TouchPin.P1))
    console.log_value("P2", input.pin_is_pressed(TouchPin.P2))

    # is_pin1= pins.digitalReadPin(DigitalPin.P1) == 0
    # is_pin2 = pins.digitalReadPin(DigitalPin.P2) == 0

    if input.pin_is_pressed(TouchPin.P1) == True:
        basic.show_number(1)
        basic.pause(5000)
        control.reset()
    if input.pin_is_pressed(TouchPin.P2) == True:
        basic.show_number(2)
        basic.pause(5000)
        control.reset()
    if input.pin_is_pressed(TouchPin.P1) and input.pin_is_pressed(TouchPin.P2) == True:
        basic.show_string("R")
        basic.pause(5000)
        control.reset()

    
    

basic.forever(on_forever)

