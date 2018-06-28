$.get('http://downdetector.com/status/steam', function(response) {
	
	var noProblems = response.search(/No problems at Steam/i);
	if(noProblems > 0) {
		document.getElementById("linkText").innerHTML = "all servers are good!";	
	}
	else {
		document.getElementById("linkText").innerHTML = "Somethings not quite right!";
	}
	
});
	

