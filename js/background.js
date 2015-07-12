(function() {
	'use strict';

	//place background
	var placebg = function(){

		//get browser window size
		var width;
		var height;

		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined') {
		  width = window.innerWidth,
		  height = window.innerHeight
		}

		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0) {
		   width = document.documentElement.clientWidth,
		   height = document.documentElement.clientHeight
		}

		// older versions of IE
		else {
		  width = document.getElementsByTagName('body')[0].clientWidth,
		  height = document.getElementsByTagName('body')[0].clientHeight
		}
		
		var aspectRatio = 0.667192740185440915367922;

		// calculate background size
		var finalw = 0;
		var finalh = 0;

		if (height/width > aspectRatio) {
			finalh = height;
			finalw = finalh / aspectRatio;
		} else {
			finalw = width;
			finalh = finalw * aspectRatio;
		}

		//apply minimum size
		var minimumWidth = 1440;
		var minimumHeight = minimumWidth * aspectRatio;

		finalw = Math.max(finalw, minimumWidth);
		finalh = Math.max(finalh, minimumHeight);

		// calculate bacground position
		var finalx = 0;
		var finaly = 0;

		finalx =  ((width - finalw) / 2 );

		finaly =  (height - finalh);

		//apply size and position to background
		document.getElementsByTagName("body")[0].style.background = "url('img/background.jpg')";
		document.getElementsByTagName("body")[0].style.backgroundSize = "" + finalw + "px " + finalh + "px"; 
		document.getElementsByTagName("body")[0].style.backgroundPosition = "" + finalx + "px " + finaly + "px";
		document.getElementsByTagName("body")[0].style.backgroundAttachment = "fixed";

		return width;
	};

	if (placebg() > 500){
		window.onresize = function() {
			placebg();
		} 
	}
})();