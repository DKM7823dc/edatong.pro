/***************************************************
==================== JS INDEX ======================
****************************************************
01. mobile menu
02. testimonial active
03. team active
04. choose active
05. Home page 3 testimonial
06. Home page 2 testimonial
07. data background
08. wow active
09. sidebar active

****************************************************/
(() => {
	if ("undefined" == typeof $ || "undefined" == typeof jQuery) return;
	(function ($) {
		"use strict";
		/*
		
		****************************************************
		01. mobile menu
		****************************************************
		*/
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}, 500);
		$('#mobile-menu').meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: "992"
		});

		$('.side-toggle').on('click', function () {
			$('.side-info').addClass('info-open');
			$('.offcanvas-overlay').addClass('overlay-open');
		})

		$('.side-info-close,.offcanvas-overlay').on('click', function () {
			$('.side-info').removeClass('info-open');
			$('.offcanvas-overlay').removeClass('overlay-open');
		})

		// One Page Nav
		// var top_offset = $('.header-area').height() - 10;
		// $('.main-menu nav ul').onePageNav({
		// 	currentClass: 'active',
		// 	scrollOffset: top_offset,
		// });


		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 245) {
				$(".header-sticky").removeClass("sticky");
			} else {
				$(".header-sticky").addClass("sticky");
			}
		});

		/*
		
		****************************************************
		08. wow active
		****************************************************
		*/

		new WOW().init();

		/*
		
		****************************************************
		09. sidebar active
		****************************************************
		*/
		$('button.menu-expand').on('click', function () {
			$('.responsive-header').addClass('menu-open');
			$('.overlay').addClass('show-overlay');
		})
		$('.overlay').on('click', function () {
			$('.responsive-header').removeClass('menu-open');
			$('.overlay').removeClass('show-overlay');
		})
	})(jQuery);
})();