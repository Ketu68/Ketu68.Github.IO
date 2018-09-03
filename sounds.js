var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
 if(!isChrome){
    $('#iframeAudio').remove()
 }

function playclip() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
		if (document.all)
		{
			document.all.sound.src = "./Audio/harley.mp3";
		}
	}

	else {
		var headSound = document.getElementsByTagName("audio")[0];
		headSound.play();
	}
}

function playclip2() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
		if (document.all)
		{
			document.all.sound.src = "./Audio/applause.mp3";
		}
	}
	
	else {
	var headSound = document.getElementsByClassName("audioApplause")[0];
	headSound.play();
	}
}

function playclip3() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
		if (document.all)
		{
			document.all.sound.src = "./Audio/thunder.mp3";
		}
	}
	
	else {
	var headSound = document.getElementsByClassName("audioThunder")[0];
	headSound.play();
	}
}

function playclip4() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
		if (document.all)
		{
			document.all.sound.src = "./Audio/laser.mp3";
		}
	}
	
	else {
	var headSound = document.getElementsByClassName("audioLaser")[0];
	headSound.play();
	}
}

function playclip5() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
		if (document.all)
		{
			document.all.sound.src = "./Audio/vroomvroom.mp3";
		}
	}
	
	else {
	var headSound = document.getElementsByClassName("audioVroom")[0];
	headSound.play();
	}
}