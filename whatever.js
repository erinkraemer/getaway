Qualtrics.SurveyEngine.addOnReady(function()
{
	var delayTime = 10 //This is the time of delay
    var that = this;
    setTimeout(function(){that.getChoiceContainer().show()}, delayTime);
	
	function countdown( elementName, minutes, seconds ) {
		var element, endTime, hours, mins, msLeft, time;
		function twoDigits( n ){
			return (n <= 9 ? "0" + n : n);
		}
		
		function updateTimer(){
			msLeft = endTime - (+new Date);
			if ( msLeft < 1000 ) {
				element.innerHTML = "Time is up!";
			} else {
				time = new Date( msLeft );
				hours = time.getUTCHours();
				mins = time.getUTCMinutes();
				element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
				setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
			}
		}
		
		element = document.getElementById( elementName );
		endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
		updateTimer();
	}
	this.countdown("countdownText", , delaytime);
	
});
