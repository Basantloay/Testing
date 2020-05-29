.........................These are installation steps for Appium testing by using real devices:..................................................................
(for more information https://www.youtube.com/watch?v=x-hBpgM5je8&list=RDCMUCTt7pyY-o0eltq14glaG5dg&start_radio=1&t=23 and https://www.youtube.com/watch?v=82KXSli1wPA)

Installing appium with Node.js

Step 1 : Check if node.js is installed on your system    node --version    npm --version

Step 2 : Download node.js installer    https://nodejs.org/en/download/

Step 3 : Run the installer & install node.js & npm

Step 4 : Check if node.js & npm are installed
    node --version    npm --version
    where node
    where npm

Step 5 : Install appium with node.js
    npm install -g appium

Step 6 : Check if appium is installed
    appium -v
    where appium

Step 7 : Start appium
    appium

Installing appium with APPIUM DESKTOP CLIENT

Step 1 : Download appium desktop client
   http://appium.io/
   https://github.com/appium/appium-desk...

Step 2 : Install appium desktop client

Step 3 : Start appium through appium desktop client

To check appium installation & dependencies
Install appium-doctor
https://github.com/appium/appium-doctor
npm install appium-doctor -g
appium-doctor -h
appium-doctor --android
Prequisites for connection:
 - Java 8 installed on system
 - JAVA_HOME is set in environment variables
 command to check : java -version
 - An android mobile device
 - Connecting cable
 - 200 MB to 1 GB of free space

Step 1 : Download SDK tools
 https://developer.android.com/studio
----------------------------------------------------------------------------------
Step 2 : Unzip folder & Extract platform tools
----------------------------------------------------------------------------------
Step 3 : Set environment variables
 ANDROID_HOME = location of sdk folder
 Path : append path of platform_tools folder
----------------------------------------------------------------------------------
Step 4 : Check command adb devices on command line
----------------------------------------------------------------------------------
Step 5 : Make device ready
 - enable developer mode
 - make USB Debugging on
----------------------------------------------------------------------------------
Step 6 : Connect device to computer system thorugh USB cable
 - if asked enable USB Debbugging
----------------------------------------------------------------------------------
Step 7 : Run command adb devices
  adb = android debug bridge
 Check your device id displayed
