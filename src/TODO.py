#1. Slow down everything
#2. Slow down, and space out spawned entities
#3. Abstract representations  (choose from random mix bag) for entities 
#4. Right pane
    #4.1 Removes the scores, arrow images
    #4.2 Mapping entities 
    #4.3 Change the road image
#5. Distance Mark function
#6. One thing marked at the time - need more details
7. Interface panel - tied to time function, question
    #7.1 Display keyboard key icons next to item legend
    #7.2 Display the question - "What is the boxed item?"
    #7.3 Keyboard interface for providing input
        #7.3.1 hold frame color green
        #7.3.2 hold frame color red
        #7.3.3 blink frame color blue
        #7.3.4 Map keys - Q, W, E
        #7.3.5 Get only one input per box and store it in boxedType variable (undecided, cash, life, obstacles)
        #7.3.6 When rendering cash, life, obstacles, 
                #7.3.6.1 #if asset.boxed is false, then auto-set asset.recognizedType to cash, life, obstacle
                        #else if asset.boxed is true, then set asset.recognizedType to undecided isUnrecognized
                #7.3.6.2 set asset.recognizedType to user input value
        #7.3.7 Set Timeout distance, amd mark incorrect and red
        #7.3.8 What happens when user enters wrong input to attention query
    7.4 Bar for time remaining
        #7.4.1 Vary boxing distances (aka timeout for system recognition failure) only for attention query 
                #Other siwse fixed distance (1/3 down) - 3 car lengths?
        #7.4.2 Calculate time remaining based on speed and remaining distance
        #7.4.3 Visualize time bar - for time remaining
       # 7.4.4 if time elapses - give -ve feedback - blink frame red
            #7.4.4.1 Use QUERY_TIMEOUT(4000ms) to decide this
            #7.4.4.2 Update a QUERY_TIMEOUT_FLAG
        #7.4.5 isBoxed is a misnomer - 
        7.4.6 Make time bar aesthetically nice (Make Time font bigger)
    #7.5 Separate pane for the interface - look at the amendment document
    #7.6 Move car all way down
    #7.7 Give feedback for keyboard key presses - Q,W,E
    #7.8 Diasble time remaining, and other query related parameters when there is no active question
8. Box them based on two different criteria
    #8.1 Environment query - based on hard time constraint rather than probablity
    #8.2 Attention query -  based on probablity (existing one)
    #8.3 Deploy attention query only when Environment query is inactive
        #8.3.1 Environment query takes precedence
        #8.3.2 Should not be posed around a time window of the Env. query
    8.4 Define probablity time constants and other coefficients and time interval parameters and randomize timings
        8.4.1 Use pilots for tuning this right
    #8.5 Have a current query Type variable
    -----8.6 Have a query type array--------
    
#9. Car controller for driving this - PID
    #9.1 Controller triggered upon human identification for unknown objects
    #9.2 Deploy EVIL controller once it has QUERY_TIMEOUT_FLAG - (How would we calculate time left, should we calculate till threshold?)
    9.3 Get the controller tied with gamespeed
        9.3.1 Add comments for changing them at tighe places using COMMENT_TAGS
    #9.4 Activate controller for boxed objects with Attn query once we go below a specific time threshold
    


#10. Distractor task panel
    #10.1 Arithmethic tasks
        #10.1.1 A subtraction task with 1 digit answer
        #10.1.2 Green and Red hold for distractor panel for correct and wrong answer
        #10.1.3 Set distractor task pause between tasks
        #10.1.4 Timer for this
        10.1.5 User instructions for distractor tasks and everything else - ERIN

11. Data collection
    #11.1 Number of obstacles, points and extra life
    11.2 Timelog of events 
        #11.2.1 Timed Generation log of different objects
        #11.2.2 Timed Log and result of all User inputs
            #11.2 .2 .1 Correct main query
            #11.2 .2 .2 Wrong main query
            #11.2 .2 .3 Correct dist query
            #11.2.2.4 wrong dist query
        #11.2.3 Time of change of icons
        11.2 .4 Score at regular time
        #11.2 .5 Time of new distractor query
        #11.2 .6 Time of new main query
        #11.2 .7 Timeout of main query
        #11.2 .8 Timeout of dist query
        #11.2 .9 asset car collision
        #11.2.10 asset pass canvas

12. Add termination code
    #12.1 - Time-based (Game ends after a specific time)
    12.2 Stop controller
    12.3 Write log to file
13. Random  scoring function
    13.1 Display the score
    13.2 Should the user be able to disambiguate between attention and env query
14. Take parameters as JSON file

15. Check for display resolution
    #15.1 Give error if disp resolution doesn't meet the minimum criteria
    15.2 Make the error aesthetically nice


16. Ready JS for mechanical turk
    - Get assignmentID, Hit ID, and worker ID from URL
    - jsTurk(?) - jsPsych

17. Video Instructions?
    - How does it work with mTurk



