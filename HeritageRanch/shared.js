var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
 if(!isChrome){
    $('#iframeAudio').remove()
}

// /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
    // var x = document.getElementById("myTopnav");
    // if (x.className === "topnav") {
        // x.className += " responsive";
    // } else {
        // x.className = "topnav";
    // }
// }
 
// function playclip() {
	// if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
		// if (document.all)
		// {
			// document.all.sound.src = "./audio/harley.mp3";
		// }
	// }

	// else {
		// var headSound = document.getElementsByTagName("audio")[0];
		// headSound.play();
	// }
// }

$('img').hide();

function test() {
    $("#backgroundpiccontainer img").first().appendTo('#backgroundpiccontainer').fadeOut(5000);
    $("#backgroundpiccontainer img").first().fadeIn(5000);
    
    setTimeout(test, 7000);
}
test();
