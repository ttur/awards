jQuery(document).ready(function($){

	var	container = $('#page'),
		video = document.getElementById('intro__video');

	if (supports_video() && !is_mobile()) {
		if ($('body').css('overflow') === 'hidden') {
			$(container).scroll(function() {
				$(video).each(function(){
					if ($(this).is(":in-viewport( 0 )")) {
						$(this)[0].play();
					} else {
						$(this)[0].pause();
					}
				});
			});
		} else {
			$(window).scroll(function() {
				$(video).each(function(){
					if ($(this).is(":in-viewport( 0 )")) {
						$(this)[0].play();
					} else {
						$(this)[0].pause();
					}
				});
			});
		}
	} else {
		$(video).hide();
		$(document.body).addClass('mobile__video');
	}

	function supports_video() {
		var vid = document.createElement('video');
		return !!(vid.canPlayType('video/mp4') ||
			vid.canPlayType('video/webm') ||
			vid.canPlayType('video/ogg'));
	}

	function is_mobile() {
		return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)); 
	}
});
