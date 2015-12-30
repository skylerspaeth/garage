# Raspberry Pi Garage Door Opener

**Web interface for opening garage**

**Credits:**

Andrew, my cousin, for helping with the code.

A YouTuber, who I can't seem to find anymore, whom I obtained the interface from.


**Instructions:**
Hook up your relay using this diagram:
```
RPi Pin: | Relay Pin:
5 (GPIO) |  IN1 / IN2
4 (5V)   |  VCC
6 (GND)  |  GND
```
**Be careful, use BOARD pins, not BCM** use [this image.](http://www.element14.com/community/servlet/JiveServlet/previewBody/73950-102-4-309126/GPIO_Pi2.png)

`git clone` this project, so that it's contents lay in `/home/pi/garage`

At the top of `trigger.py`, change the variable `pin` to the pin that your relay is connected to on your Pi (BOARD, not BCM).

Verify that nothing is running on port 80 (ex: `Apache`), and edit `/etc/rc.local` and add these lines right before `exit 0`:
```
exec 2> /tmp/rc.local.log      # send stderr from rc.local to a log file
exec 1>&2                      # send stdout to the same log file
set -x                         # tell sh to display commands before execution
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000
(cd /home/pi/garage; /usr/local/bin/node server)&
```
Reboot your Pi with `sudo reboot`.

That's it, try accessing your web interface by going to your Pi's IP address. If that doesn't work, try going to port `3000` (`rpi.local:3000`)

If you are running iOS, you can even add it to your home screen. This will allow the app to launch as if it were a native app (full screen), and with an icon.
