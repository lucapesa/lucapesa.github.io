(function() {
	'use strict';

	var domain = "lucapesavento.com";
	var name = "hello";

	var hrefText = "mailto:" + name + "@" + domain;

	document.getElementById("email").href = hrefText;

})();