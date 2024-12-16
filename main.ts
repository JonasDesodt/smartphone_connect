bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
})
let geheugen = ""
let data = ""
basic.showIcon(IconNames.Asleep)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
basic.forever(function () {
    if (geheugen == "wacht" && data == "f") {
        geheugen = "f"
        basic.showArrow(ArrowNames.North)
    } else if (geheugen == "wacht" && data == "r") {
        geheugen = "r"
        basic.showArrow(ArrowNames.East)
    } else if (geheugen == "wacht" && data == "b") {
        geheugen = "b"
        basic.showArrow(ArrowNames.South)
    } else if (geheugen == "wacht" && data == "l") {
        geheugen = "l"
        basic.showArrow(ArrowNames.West)
    } else if (geheugen == "f" && data == "l") {
        geheugen = "f"
        basic.showArrow(ArrowNames.NorthWest)
    } else if (geheugen == "f" && data == "r") {
        geheugen = "f"
        basic.showArrow(ArrowNames.NorthEast)
    } else if (geheugen == "b" && data == "l") {
        geheugen = "b"
        basic.showArrow(ArrowNames.SouthEast)
    } else if (geheugen == "b" && data == "r") {
        geheugen = "b"
        basic.showArrow(ArrowNames.SouthWest)
    } else if (geheugen == "l" && data == "f") {
        geheugen = "l"
        basic.showArrow(ArrowNames.NorthWest)
    } else if (geheugen == "r" && data == "f") {
        geheugen = "r"
        basic.showArrow(ArrowNames.NorthEast)
    } else if (geheugen == "l" && data == "b") {
        geheugen = "l"
        basic.showArrow(ArrowNames.SouthEast)
    } else if (geheugen == "r" && data == "b") {
        geheugen = "r"
        basic.showArrow(ArrowNames.SouthWest)
    } else {
        geheugen = "wacht"
        basic.clearScreen()
    }
})
