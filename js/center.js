(function() {
	'use strict';

	var contentHeight = document.getElementById("content").clientHeight + 30 + 30 //accounting for margin
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

	if (contentHeight < viewportHeight) {
		document.getElementById("spacing").style.height = "" + (viewportHeight - contentHeight) / 2 + "px"
	}


})();