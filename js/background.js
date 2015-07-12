(function() {
	'use strict';

	//place background
	var placebg = function(){

		//get browser window size
		var width = window.innerWidth || document.body.clientWidth;
		var height = window.innerHeight || document.body.clientHeight;
		
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
		document.getElementsByTagName("body")[0].style.background = "url('img/background@2x.jpg')";
		document.getElementsByTagName("body")[0].style.backgroundSize = "" + finalw + "px " + finalh + "px"; 
		document.getElementsByTagName("body")[0].style.backgroundPosition = "" + finalx + "px " + finaly + "px";
		document.getElementsByTagName("body")[0].style.backgroundAttachment = "fixed";
	};

	placebg();

	window.onresize = function() {
		placebg();
	} 
})();