jQuery(document).ready(function($){
	var container = $('#page'),
		contentSections = $('.section'),
		navigationItems = $('nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});
	container.on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
	});

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('selected');
			}else {
				navigationItems.eq(activeSection).removeClass('selected');
			}
		});
	}

	function smoothScroll(target) {
		if ($('body,html').css('overflow') === 'hidden') {
			var scrollTop = container.scrollTop() + target.offset().top;
			container.animate(
				{'scrollTop':scrollTop},
				600
			);
		} else {
			$('body,html').animate(
				{scrollTop: target.offset().top},
				600
			);
		}
	}
});