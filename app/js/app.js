document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
	// Анимация полосы в меню
	var line = document.querySelector('.nav-indicator');
	var itemsMenu = document.querySelectorAll('.nav-item');
	// console.log(line);
	// console.log(itemsMenu);
	findPos(itemsMenu);
	function findPos(elems) {
		for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('mouseover', function () {
				// console.log(this.offsetLeft);
				line.style.height = 4 + 'px';
				line.style.marginLeft = this.offsetLeft + 'px';
				// console.log(this.offsetWidth);
				line.style.width = this.offsetWidth + 'px';
			});
			elems[i].addEventListener('mouseout', function () {
				line.style.height = 0 + 'px';
			});
		}
	}

	// Слайдер на главной странице
	$('.main-catalog-slick').slick({
		slidesToShow: 6,
		arrows: false,
		infinite: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1365,
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

	// Стилизация селектов
	$('select, .styler-form-element *, .input-checkbox *').styler({

	});

	// Выпадающее меню в фильтрах
	$('.catalog-filter__dropdown-title').on('click', function() {
		// var list = $(this + '+catalog-filter__dropdown-list');
		$(this).next().toggleClass('active');
		$(this).toggleClass('active');
	});

	// Стилизайи range-слайдера
	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 4500,
		max: 7500,
		step: 100,
		// from: 5000,
		// to: 6000,
		onStart: function (data) {
			$("#js-range-slider__from").val(data.from);
			$("#js-range-slider__to").val(data.to);
		},
		onChange: function (data) {
			$("#js-range-slider__from").val(data.from);
			$("#js-range-slider__to").val(data.to);
		},
});
});

// function inputField(input, line) {
// 	$('');
// }