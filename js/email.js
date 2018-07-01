(function() {
	'use strict';

	var domain = "lucapesavento.com";
	var name = "hello";

	var href = "mailto:" + name + "@" + domain;
	var innerHTML = name + "@" + domain;

	if (document.getElementById("email").innerHTML == "")
		document.getElementById("email").innerHTML = innerHTML;
	document.getElementById("email").href = href;

})();