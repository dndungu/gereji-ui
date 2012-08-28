core.layout = {
	init: function(){
		$(document).ready(function(){
			core.layout.resize();
			core.layout.locksizes();
			core.layout.initMenuSlide();
			$(window).resize(function(){
				core.layout.resize();
			});
		});
	},
	locksizes: function(){
		var width = $('#mainarea .navigation .switcher').width();
		$('#mainarea .navigation .switcher').width(width);
	},
	resize: function(){
		var height = $(window).height() - 48;
		$('#mainarea, #mainarea .navigation, #mainarea .navigation .switcher').height(height);
		$('#mainarea .navigation .switcher span').css({marginTop: (height / 2.5)});
	},
	initMenuSlide: function(){
		$('#mainarea .navigation .switcher').mousedown(function(){
			$('#mainarea').toggleClass('hiddenMenu');
		});
	}
};
core.layout.init();