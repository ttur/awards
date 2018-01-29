$(document).ready(function() {

	// if (supports_video() && !is_mobile()) {
	if (supports_video()) {

		//var video = document.getElementById('video-elem');
		//var muteButton = document.getElementById('mute');
		//var play = document.getElementById('play');

		var videos = $(".video-elem");
		var muteButtons = $('.mute');
		var plays = $('.video-elem');

		$(muteButtons).show();
		$(plays).show();

		videos.bind('ended', function() {
			this.pause();
			this.currentTime = 0;
			this.load();
		}, false);

		muteButtons.click(function(e) {
			var muteBtn = e.target;
			var vid = $(muteBtn).siblings("video");
			console.log(vid)
			if ($(vid).prop('muted')) {
				$(vid).prop('muted', false);
				$(muteBtn).removeClass('muted').addClass('unmuted');
			} else {
				$(vid).prop('muted', true);
				$(muteBtn).removeClass('unmuted').addClass('muted');
			}
		});

		plays.each(function(i, play) {
			$(play).click(function(e) {
				var vid = e.target;
					if (vid.paused) {
						vid.play();
					} else {
						vid.pause();
					}
			});
		});

		videos.each(function(i, vid) {
			vid.play();
		});

	} else {
		$('.video').hide();
		$('img.fallback').show();
	}

	function supports_video() {
		var vid = document.createElement('video');
		return !!(vid.canPlayType('video/webm') ||
			vid.canPlayType('video/mp4') ||
			vid.canPlayType('video/ogg'));
	}

	function is_mobile() {
		return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
	}
});
