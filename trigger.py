import RPi.GPIO as GPIO
import time
pin = 5
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(pin,GPIO.OUT)
GPIO.output(pin,GPIO.LOW)
time.sleep(1)
GPIO.output(pin,GPIO.HIGH)
GPIO.cleanup
print 'Did it!'
