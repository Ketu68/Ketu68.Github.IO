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

// $('img').hide();


$(function test() {
	$("#backgroundpiccontainer img").first().appendTo('#backgroundpiccontainer').fadeOut(5000);
	$("#backgroundpiccontainer img").first().fadeIn(5000);
    
	setTimeout(test, 7000);

})
test();
// $('img').show();

var request;
var $current;
var cache = {};
var $frame=$("photo-viewer");
var $thumb=$('.thumb');

function crossfade($img) {
	if($current) {
		$current.stop().fadeOut('slow');
	}
	$img.css({
	marginLeft: -$img.width() / 2, marginTop: -$img.height() /2});
	
	$img.stop().fadeTo('slow', 1);
	
	$currrent = $img;
}

$(document).on('click', '.thumb', function(e) {
	var $img;
	var src=this.href;
	request=src;
	
	e.preventDefault();
	
	$thumbs.removeClass('active');
	$(this).addClass('active');
	
	if(cache.hasOwnProperty(src)) {
		if(cache[src].isLoading === false) {
			crossfade(cache[src].$img);
		}
	}
	else {
		$img = $('<img/>');
		cache[src] = {$img: $img, isLoading: true};
	
	$img.on('load', function() {
		$img.hide();
		$frame.removeClass('is-loading').append($img);
		cache[src].isLoading = false;
		if(request===src) {
			crossfade($img);
		}
	});
	
	$frame.addClass('is-loading');
	
	$img.attr({
		'src': src,
		'alt': this.title || ''
	});
	
	}
	
});

$('.thumb').eq(0).click();


			
