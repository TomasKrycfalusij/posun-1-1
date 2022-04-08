x = 0
y = 0
displej = 5

for i in range(displej):
    led.plot(x, y)
    x += 1

def on_button_pressed_a():
    global x, y
    while True:
        basic.clear_screen()
        y += 1
        for i in range(displej):
            x += 1
            led.plot(x%5, y%5)
        basic.pause(3000)
input.on_button_pressed(Button.A, on_button_pressed_a)