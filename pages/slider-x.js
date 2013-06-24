var $slider = $('.slider'); // class or id of carousel slider
var $slide = 'li'; // could also use 'img' if you're not using a ul
var $transition_time = 2000; // 1 second
var $time_between_slides = 8000; // 8 seconds
var $i=-1;
var $intervalID=null;

function slides(){
	return $slider.find($slide);
}

function timerCallback()
{
    var s = slides();
    s.eq($i).removeClass('active');
 
    s.eq($i).fadeOut($transition_time);
    if ((s.length-1) === $i) 
    {
	$i = -1; // loop to start
    }
    $i++;
    s.eq($i).fadeIn($transition_time);
    s.eq($i).addClass('active');
}
		
function setUpSlider()
{
    if($intervalID !== null)
    {
        window.clearInterval($intervalID);
    }else{
        timerCallback();	// Place the initial slide on the screen before we start the timer to change them   
    }
    // Fadeout all the slides
    slides().fadeOut();
    // set active classes
    slides().eq(0).addClass('active');
    slides().eq(0).fadeIn($transition_time);
    $slider.find($slide + '.active').index();
    $intervalID = setInterval(timerCallback, $transition_time +  $time_between_slides);
}
