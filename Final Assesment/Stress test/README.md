#The Stress tests is made with Apache JMeter tool.

**The tests are runned on official Spotify.

**The features are:

1-  Search for song

2-  Search for artist

3-  View Playlist

4-  Help

5-  Login


**To Run Jmeter from Command Line

Step 1 : Goto command line - goto jmeter - bin

Step 2 : Command : 

jmeter -n -t (location of your jmeter test script) -l (location of the result file)
   
            -n - non gui mode
            -t  - location of jmeter script
            -l  - location of result file

jmeter -h  - to get help on jmeter commands 



jmeter -n -t D:\Stresstest\spotify_stress_20request.jmx -l D:\Stresstest\CVS_Spotify.cvs

**To generate HTML reports

jmeter -n -t D:\Stresstest\spotify_stress_test_20_1.jmx -l D:\Stresstest\CVS_Spotify_20.cvs -e -o D:\Stresstest\HTML_reports\