let i: number;
let x = 0
let y = 0
let displej = 5
for (i = 0; i < displej; i++) {
    led.plot(x, y)
    x += 1
}
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    while (true) {
        basic.clearScreen()
        y += 1
        for (let i = 0; i < displej; i++) {
            x += 1
            led.plot(x % 5, y % 5)
        }
        basic.pause(3000)
    }
})
