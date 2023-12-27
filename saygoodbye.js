(function(window) {
	var speakWord = "Good Bye";
	var saygoodbye = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.saygoodbye = saygoodbye;

})(window);