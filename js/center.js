(function() {
	'use strict';

	var contentHeight = document.getElementById("content").clientHeight + 50 + 30 //accounting for margin
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

	console.log(contentHeight)
	console.log(viewportHeight)

	if (contentHeight < viewportHeight) {
		document.getElementById("spacing").style.height = "" + (viewportHeight - contentHeight) / 2 + "px"
		console.log(document.getElementById("spacing").style.height)
	}

})();