// TODO: ↓↓↓ remove this script ↓↓↓
// Current menu item highlithing
$(function () {
	var location = window.location.href;
	var cur_url = location.split('/').pop();

	$('.top-nav li, .mobile-top-nav li, .footer-nav li, .sidebar-nav li').each(function () {
		var link = $(this).find('a').attr('href');

		// console.log(link);

		if (cur_url == '') {
			cur_url = 'index.html';
		}

		if (cur_url == link)
		{
			$(this).addClass('current-menu-item');
			$(this).parents('li').addClass('current-menu-parent');
		}
	});
});


document.addEventListener('DOMContentLoaded', function(){

	// notification-block
	$('.notification-block .dismiss-btn').click(function(e){
		e.preventDefault();

		$(this).closest('.notification-block').slideUp(300);

		setTimeout(function(){
			$(this).closest('.notification-block').remove();
		}, 300);
	});

	// Calculate component
	$('.calculate-component .cmp-type-select .select-btn').click(function(e){
		e.preventDefault();

		$(this).addClass('current').siblings().removeClass('current');
	});

	// Popover
	$('.popover-block .block-opener').click(function(e){
		e.preventDefault();
	});

	// Accordions
	$('.accordion').each(function(i, el){
		$(el).find('.ac-header, .ac-opener').click(function(e){
			e.preventDefault();
			e.stopPropagation();

			let ariaLabelEl = $(this).closest('.accordion').find('[aria-label]');
			let ariaLabelText = $(ariaLabelEl).attr('aria-label');

			if (ariaLabelText == 'Open accordion') {
				$(ariaLabelEl).attr('aria-label', 'Close accordion');
			} else {
				$(ariaLabelEl).attr('aria-label', 'Open accordion');
			}

			$(this).closest('.accordion').find('.ac-content').stop().slideToggle(300);
			$(this).closest('.accordion').toggleClass('opened');
		});
	});

	// reward-form
	$('.reward-form').on('submit', function(e){
		e.preventDefault();

		new ClipboardJS('.js-copy-btn');
	});

	// Buy 2
	// $('.pricing-range-field').on('change input', function(e){
	// 	let id = +$(this).val();
	// });

	

	if ($('input').is('.pricing-range-field')) {
		jcf.setOptions('Range', {
			range: 'min'
		});

		jcf.replace( $('.pricing-range-field') );

		$('.pricing-range-field').on('change input', function(e){
			let id = +$(this).val();

			$('.pricing-values .item:nth-child('+ (id+1) +')').addClass('current').siblings().removeClass('current');
		});
	}

	// $('.pricing-values [data-val]').click(function(e){
	// 	let input = document.querySelector('.pricing-range-field');

	// 	input.value = $(this).data('val');
	// 	$('.pricing-range-field').trigger('change');

	// 	jcf.refresh( $('.pricing-range-field') );
	// });

	// Sliders
	// function equalSlideHeight(slider){
	// 	$(slider).on('setPosition', function () {
	// 		$(this).find('.slick-slide').height('auto');
	// 		var slickTrack = $(this).find('.slick-track');
	// 		var slickTrackHeight = $(slickTrack).height();
	// 		$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
	// 	});
	// }

	// let arrowsButtons = {
	// 	prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M234 491h199L244 246 433 0H234L45 246l189 245z" fill="#0B7DE3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M188 514h199L199 269 387 23H188L0 269l188 245z" fill="#D74814"/></svg></button>',
	// 	nextArrow: '<button type="button" class="slick-next" aria-label="Следующий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M199 23H0l189 246L0 514h199l189-245L199 23z" fill="#0B7DE3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M245 0H46l188 245L46 491h199l188-246L245 0z" fill="#D74814"/></svg></button>'
	// }

	// $('.first-screen-slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	...arrowsButtonsWhite,
	// 	dots: false,
	// 	infinite: false,
	// 	speed: 800,
	// 	appendArrows: $('.first-screen-slider-nav'),
	// 	// adaptiveHeight: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 4000,
	// 	swipeToSlide: true,
	// 	touchMove: false,
	// 	// fade: true
	// 	responsive: [
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				arrows: false,
	// 				dots: true,
	// 				appendDots: $('.first-screen-slider-nav')
	// 			}
	// 		}
	// 	]
	// });

	// equalSlideHeight('.first-screen-slider');

	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80
		}, 500);
	});

	// Steps nav
	if ($('div').is('.steps-nav-wrapper')) {
		setTimeout(function(){
			$('.steps-nav-wrapper').animate({scrollLeft: $('.steps-nav-wrapper .current').position().left}, 500);
		}, 200);
	}


	// Menu opener
	$('.menu-opener').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.mobile-top-nav').toggleClass('opened');
		$('.header').toggleClass('nav-opened');
	});

	// Mobile nav
	$('.mobile-top-nav a').click(function(e){
		e.stopPropagation();
		// $('.menu-opener').click();
	});

	$('.mobile-top-nav li').click(function(){
		// $('.menu-opener').click();
		$(this).find('.sub-menu').slideToggle(300);
	});

	$('body').on('click', '.header.nav-opened', function(e){
		if ($(e.target).is('.header')) {
			$('.menu-opener').click();
		}
	});

	// Sticky Header
	window.addEventListener('scroll', function(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	});

	setTimeout(function(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	}, 100);

	// Forms
	$('input, textarea').on('keyup', function(){
		!!$(this).val() 
			? $(this).addClass('not-empty') 
			: $(this).removeClass('not-empty');
	});


	// Modals
	$('.modal').css('display','block');

	$('.modal-dialog').click(e => e.stopPropagation());
	$('.modal').click(function(e){
		hideModal( $(this) );
	});

	$('.modal-close, .js-modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		if ($(this).data('modal-tab') != undefined) {
			goToTab($(this).data('modal-tab'));
		}

		showModal( $(this).data('modal') );
	});

	$('[data-btn-text]').click(function(e){
		let btnText = $(this).data('btn-text');

		$('.js-change-text').text(btnText);
	});

	// Tabs
	function goToTab(tabId, handler){
		if (handler == undefined) {
			handler = false;
		}

		let dest = $( tabId );
		dest.stop().fadeIn(300).siblings().hide(0);

		$('[data-tab="'+tabId+'"]').addClass('current').siblings().removeClass('current');

		// if (handler != false) {
			
		// 	$(handler).addClass('current').siblings().removeClass('current');
		// }
	}

	$("[data-tab]").click(function(e){
		e.preventDefault();
		let dest = $(this).data('tab');

		goToTab(dest, $(this));

		$(dest).find('.slick-slider').slick('setPosition');
	});

	$(".tabs-nav [data-tab]").eq(0).click();
	$(".cmp-tabs [data-tab]").eq(0).click();
	$(".modal-tabs-nav [data-tab]").eq(0).click();


	// Phone inputs
	$('input[type="tel"]').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9+\s]/g)) {
			this.value = this.value.replace(/[^0-9+\s]/g, '');
		}
	});

	// Filter
	$('.toggle-filter').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');

		$( $(this).data('target') ).stop().slideToggle(300);
	});

	$( $('.toggle-filter:not(.active)').data('target') ).hide();

	// File select
	$('.file-select').each(function(i, el){
		$(el).find('input').on('change', function(){
			if (!!$(this).val()) {
				$(el).find('.filename').show().text( $(this)[0].files[0].name );
				$(el).find('.no-selected-text').hide();
			} else{
				$(el).find('.filename').hide().text('');
				$(el).find('.no-selected-text').show();
			}
		});
	});

	// Mobile sidebar
	$('.js-show-sidebar').click(function(){
		$('.page-sidebar').toggleClass('opened');
	});

	$(document).mouseup(function (e){
		var div = $(".js-show-sidebar");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.page-sidebar').removeClass('opened');
		}
	});
});

function getScrollWidth(){
	// create element with scroll
	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';

	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();

	return scrollWidth;
}

let bodyScrolled = 0;
function showModal(modal){
	$(modal).addClass('visible');
	bodyScrolled = $(window).scrollTop();
	$('body, .header').addClass('modal-visible')
			 .scrollTop(bodyScrolled)
			 .css('padding-right', getScrollWidth());
}

function hideModal(modal){
	$(modal).removeClass('visible');
	bodyScrolled = $(window).scrollTop();
	$('body, .header').removeClass('modal-visible')
			 .scrollTop(bodyScrolled)
			 .css('padding-right', 0);
}