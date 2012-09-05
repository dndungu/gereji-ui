core.layout = {
	init: function(){
		$(document).ready(function(){
			core.layout.resize();
			core.layout.locksizes();
			core.layout.initMenuSlide();
			core.layout.initMenuExpand();
			core.layout.initDetailExpand();
			$(window).resize(function(){
				core.layout.resize();
			});
		});
	},
	stage: {
		leftBox: new Object(),
		rightBox: new Object()
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
	},
	initMenuExpand: function(){
		$('#mainarea .navigation .menu ul li a').mousedown(function(){
			var subject = $(this);
			var parent = subject.parent();
			$('#mainarea .navigation .menu ul li.open').not(parent).removeClass('open');
			parent.toggleClass('open');
		});
	},
	initDetailExpand: function(){
		$('#mainarea .maincontent .rightBox .detail h3').mousedown(function(){
			var subject = $(this);
			var parent = subject.parent();
			$('#mainarea .maincontent .rightBox .detail').not(parent).removeClass('open');
			parent.toggleClass('open');
		});
	}
};
core.layout.init();