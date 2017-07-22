TA "every now and then I get a little bit"
TA (Q1)
	TRUE: Lonely and you're never coming round
	FALSE: Hungry and you're always chowing down
TA (Q2)
	TRUE: Tired of listening to the sound of my tears
	FALSE: Mired in everlasting nightmares and fears
TA (Q3)
	TRUE: Nervous that the best of all the years have gone by
	FALSE: Impervious to the rest of your stinking lies
TA (Q4)
	TRUE: Terrified and then I see the look in your eyes
	FALSE: Freightened when I see the look in your eyes
TABE (Q5)
	But every now and then I
	(phrase repeats twice, choose first time, second time lyrics is automatically generated for user)
		TRUE: Fall apart (TRUE)
		FALSE: Get a little bit (FALSE)
		THEN: alert("every now and then I fall apart")
TA (Q6)
	TRUE: Restless and I dream of something wild
	FALSE: Feckless and I think that I'm a child
TA (Q7)
	TRUE: Helpess and I'm lying like a child in your arms
	FALSE: Hopeless and I'm dying of your charms
TA (Q8)
	TRUE: Angry and I know you have to get out and cry
	FALSE: Outraged and I know you have to storm out and lie
TA (Q9)
	TRUE: Terrified and then I see the look in your eyes
	FALSE: Frozen and then I fall down and cry
TABE
	But every now and then I fall apart (x2)
	And I need you
	TRUE: Now tonight
	FALSE: More than ever 
	THEN: alert("and I need you more than ever!")
/* rip SONG of Bonnie Tyler singing chorus */



/*

3 health points / hearts. If you get three questions wrong, you have to start at the beginning of the quiz.
Guess the lyrics, you have three tries before you suffer from a total eclipse of the heart

8bit song version of Total Eclipse of the heart
https://www.youtube.com/watch?v=j-IYW_VE-q4

START

- Click turn around button.
- lyrics "every now and then I" + "get a little bit" appear
- User clicks on choice
	- if false, alerts: Wrong, try again. Design change state, screen turns red.
	- if true, 
		- false lyrics disappear
		- correct lyrics stay on screen
		- Turn around button appears.
- Click turn around button.
- lyrics "every now and then I" + "get a little bit" appear

Repeat 4 times. (lonely, tired, nervous, terrified)

- Click turn around button.
- lyrics "Bright Eyes" + "every now and then I"
- Question 5
	True: Fall Apart
	False: Get a little bit
		- if false, alerts: Wrong, try again. Design change state, screen turns red.
		- if true, next lyrics appear. No turn around button!!

- lyrics "every now and then I" + "fall apart."
- Click turn around button.
- lyrics "every now and then I" + "get a little bit" appear
- Question appears after 2 second delay

Repeat 4 times. (restless, helpless, angry, terrified)

- Click turn around button.
- "Bright Eyes" + "every now and then I" + "fall apart" + "And I need you..."
	- True: Now tonight
	- False: More than Ever
		- If true, Bonnie Tyler Appears & song starts playing.
		- If false, try again


If user gets three questions wrong:
Object {
	Life: 3;
}
every question wrong, deduct 1 from object.life
If object.life = 0, alert "Game Over!", form resets.










*/