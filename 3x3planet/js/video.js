$(document).ready(function() {

	// if (supports_video() && !is_mobile()) {
	if (supports_video()) {

		var video = document.getElementById('video-elem');
		var muteButton = document.getElementById('mute');
		var play = document.getElementById('play');
		
		$(muteButton).show();
		$(play).show();

		video.addEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
			this.load();
		}, false);

		muteButton.addEventListener('click', function() {
			if ($(video).prop('muted')) {
				$(video).prop('muted', false);
				$(muteButton).removeClass('muted').addClass('unmuted');
			} else {
				$(video).prop('muted', true);
				$(muteButton).removeClass('unmuted').addClass('muted');
			}
		}, false);

		play.addEventListener('click', function() {
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		}, false);

		video.play();

	} else {
		$('video').hide();
		$('img#fallback').show();
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
