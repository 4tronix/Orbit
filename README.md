# Makecode extension for 4tronix Orbit

Helper routines for using the Fireleds in the Orbit RGB Globe https://4tronix.co.uk/orbit/.

## General
The Orbit contains 256 Fireleds arranged as 16 segemnts of 16 Fireleds each. This forms a band of 256 Fireleds, with LED 0 being
the bottom of the first segment and LED 255 being the top of the 16th segment.

There are 3 categories within the Orbit package:

###Generic
Has standard LED control blocks, such as set/clear all LEDs, set the Brightness and select Manual or Automatic updates.

###Single String
Contains block to treat all the LEDs as one long string of LEDs, such as setting individual colours and shifting them.

###Latitude Longitude
Includes blocks for setting and moving rings of colours sidways (Longitude) or vertically (Latitude), as well as
using essentially X-Y addressing to set individual Fireleds.

## Generic Category
Set all Fireleds to the same colour, or clear all Fireleds.
```blocks
// set all to Green
orbit.setLedColor(0x00ff00);
// clear all LEDs
orbit.ledClear();
```

Set the brightness of all LEDs. This can vary from 0 to 255, but we recommend leaving it at the default value of 40. High values will require much higher power supply current.
```blocks
// set brightness of future updates to 40
orbit.ledBrightness(40);
```

The default setting is for Automatic updates of the Fireleds after any changes are made. This makes it very easy to use.
However, if a large amount of changes are being made at one time, it is quick and produces a better output if the updates are done manually
at the end of all the changes. To do this, select Manual updates, make all the changes required, then select "Show changes"
```blocks
// Select Manual update mode
orbit.setUpdateMode(ledMode.Manual);
...
// make all changes required
...
// Show all the changes on the LEDs
orbit.ledShow();
```

Because writing to the LEDs is timing sensitive and so is Bluetooth, it is not possible to use them both simultaneously.
Therefore there is a command which disables all writes to the LEDs, so that Bluetooth functions can be performed.
```blocks
orbit.enableBluetooth(true)
```

## Single String Category
You can treat all the 256 Fireleds as a single string of LEDs from 0 to 255. This category provides a few blocks to help with this.
```blocks
// set LED at position 35 to Red
orbit.setPixelColor(35, 0xff0000);
// set all 256 Fireleds to rainbow colour wheel values. LED0 will be Red, through to LED 255 as violet
orbit.ledRainbow();

// Shift all the LEDs by one position. So LED1 will be same as LED0 was, LED2 will be same as LED1 was. LED0 will be set to blank
orbit.ledShift();
// Rotate all the LEDs by one position. This is the same as Shift, ecept that LED0 becomes the same as LED255 was previously
orbit.ledRotate();
```

## Latitude-Longitude Category
Essentially this category treats the Fireleds as a 16 x 16 matrix. Latitude 0 is at the bottom and Latitude 15 is at the top. Longitude 0 is
nearest the Microbit/Pi and longitude 15 is all the way round from there, so it is next to longitude 0.
There are blocks to set individual Fireleds, set a ring of fire leds, or move Fireleds vertically ("in Latitude") or horizontally ("in Longitude").
```blocks
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

## Supported targets

* for PXT/microbit

## License

MIT
