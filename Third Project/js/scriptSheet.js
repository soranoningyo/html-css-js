/*global $,document, window, setInterval, clearInterval*/

// li active mode
$('.fixed nav  ul li').click(function () {

	'use strict';

	$(this).addClass('active').siblings().removeClass('active');

});

	// smooth scrolling

$('nav ul li').click(function () {

	'use strict';

	$('html ,body').animate({

		scrollTop: $('#' + $(this).data('value')).offset().top

	}, 1000);

});

 // Displaying fixed nav

	$(window).scroll(function () {
		
		'use strict';

	var scrolling = $(window).scrollTop();
		
	if (scrolling > 780 || scrolling < 100) {
		
		$('.fixed').slideDown(1000);
		
	} else {
		
		$('.fixed').slideUp(1000);
		
	}
});
///////
	var scrolling = $(window).scrollTop();
		
	if (scrolling > 780 || scrolling < 100) {
		
		$('.fixed').fadeIn(1000);
		
	} else {
		
		$('.fixed').fadeOut(1000);
		
	}

 // Type Writer Effect

var type = document.getElementById('show'),
	i = 0,
	text = document.getElementById('show').textContent;

type.textContent = '';

var mf = setInterval(function () {
	'use strict';

	type.textContent += text[i];

	i = i + 1;

	if (i > text.length - 1) {
		clearInterval(mf);
		i = 0;
	}

}, 30);

 // header content place

$('header .headercon').css({

	top: ($('header').height() - $('header .headercon').height()) / 3

});
 // Trigger Bxslider
$('.bxslider').bxSlider({

	pager: false

});

 //	Adjusting Bxslider Li

$('.bxslider li').each(function () {

	'use strict';
	
	$(this).css('paddingTop', ($('.testi').height() - $('.bxslider li').height()) / 2);
		
});

 // Trigger Accordion

	$('.accordion h3').click(function () {
		
		'use strict';
		
		$(this).next().slideToggle(500);
		
		$('.accordion p').not($(this).next()).slideUp();
		
	});

 // Trigger Count To Plugin


$(window).scroll(function () {
	
	if ($('.msta .left .top span:first-of-type').text() != 500) {
		if ($(window).scrollTop() > 1700) {
		
			$('.timer').countTo();	
		}
	}
});
/////////////

	if ($(window).scrollTop() > 1700) {
		
	$('.timer').countTo();	

}

 //Trigger mixItUp plugin

$(function () {
	
	'use strict';
	
	$('.gallery').mixItUp();
	
});

 // Textarea Character Counter

var txa = document.getElementById('txa'),
	lec = document.getElementById('left'),
	max = document.getElementById('max'),
	x = 140;

max.innerHTML = x;

txa.oninput = function () {
	
	"use strict";

	if (this.value.length < 10 && this.value.length > 0) {
		
		lec.textContent = "0" + this.value.length;
		
	} else if (txa.value.length < 100 && txa.value.length >= 10 && x > 100) {
		
		lec.textContent = "0" + this.value.length;
		
	} else {
		
		lec.textContent = this.value.length;
	}
	if (txa.value.length > x) {
		
		lec.style.color = "red";
		
		lec.style.fontWeight = "bolder";
		
	} else {
		
		lec.style.color = "#fff";
	}
};

lec.textContent = txa.value.length;

 // Trigger niceScroll plugin

$('html').niceScroll({
	
	cursorcolor: '#7a173c',
	cursorwidth: '8px',
	autohidemode: false,
	zindex: 3,
	cursorborder: '3px dotted #7a173c'

});















