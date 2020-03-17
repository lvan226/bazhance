document.addEventListener("DOMContentLoaded", function() {

	// Custom JS


	// Слайдер на главной странице
	$('.main-catalog-slick').slick({
		slidesToShow: 6,
		arrows: false,
		infinite: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1281,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					variableWidth: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	// Меню в шапке
	$('.menu-burger').on('click', function() {
		$('.menu').toggleClass('active');
		$('.filter-bg').toggleClass('active');
		$('.logo').toggleClass('active');
	});

	// Поиск анимация выдвижения
	$(".menu__search").hover(function() {
		$(".menu__search").addClass('active');
	},
	function() {
		if (!$(".input-search").val() && !$('.input-search').is(":focus")) {
			$(".menu__search").removeClass('active');
		}
	});
	$(".menu__search").on('click', function() {
		$(".menu__search").addClass('active');
	});
	$(".input-search").on("input", function() {
		$(".menu__search").addClass('active');
	});
	$('.input-search').focusout(function () {
		if ($(this).val() === '' ) {
			$(".menu__search").removeClass('active');
		}
	});


});
