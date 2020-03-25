{
    // set all to Green
    orbit.setLedColor(0x00ff00);

    // clear all LEDs
    orbit.ledClear();

    // set brightness of future writes to 40
    orbit.ledBrightness(40);

    // Select Manual update mode
    orbit.setUpdateMode(ledMode.Manual);

    // Show all the changes on the LEDs
    orbit.ledShow();

    // set LED at position 35 to Red
    orbit.setPixelColor(35, 0xff0000);

    // set all 256 Fireleds to rainbow colour wheel values. LED0 will be Red, through to LED 255 as violet
    orbit.ledRainbow();

    // Shift all the LEDs by one position. So LED1 will be same as LED0 was, LED2 will be same as LED1 was. LED0 will be set to blank
    orbit.ledShift();

    // Rotate all the LEDs by one position. This is the same as Shift, ecept that LED0 becomes the same as LED255 was previously
    orbit.ledRotate();

    // Set individual Fireled to Blue at latitude 4 and longitude 7
    orbit.setLLPixelColor(4,7,0x0000ff);

    // Set a horizontal ring/circle to Green at latitude 4
    orbit.setLLCircle(LatLong.Latitude,4,0x00ff00);

    // Set a vertical ring/circle to Red at longitude 12
    orbit.setLLCircle(LatLong.Longitude,12,0xff0000);

    // Rotate all LEDs vertically. All LEDs move up (or down) one position and the bottom ring 0 take the previous values of the top ring
    orbit.rotateLatLong(LatLong.Latitude, MoveDirection.Forward);

    // Rotate all LEDs horizontally. LEDs travel around the Orbit continuously
    orbit.rotateLatLong(LatLong.Longitude, MoveDirection.Forward);

    // Orbit all the LEDs vertically. LEDs travel up one segment and down the opposite segment
    orbit.orbitNorthSouth(MoveDirection.Forward);
}