import {
	testimonilasSwiper,
	burgerMenu,
	accordion,
	downloadButton,
	capabilitiesSwiper,
	symbolsCounter,
	scroll,
	inputsValidation,
	popup,
	headerMenu,
	changeText, initScrollObserver, scrollButton
} from './modules/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
	scroll();
	scrollButton();
	headerMenu();
	if (document.querySelector('.multilingual__flag.multilingual__flag--more')){
		changeText('.multilingual__flag.multilingual__flag--more', '+3 <br> more');
	}
	if (document.querySelector('.read-more__btn.read-more__btn--apache')) {
		changeText('.read-more__btn.read-more__btn--apache', 'Apache 2.0');
	}
	testimonilasSwiper;
	accordion();
	burgerMenu();
	capabilitiesSwiper();
	downloadButton();
	symbolsCounter();
	inputsValidation();
	popup('a[data-popup-contact]', 'img[data-popup-contact-close]', '.popup-contact');
	initScrollObserver('.system__item', '.system__img-wrapper');
	initScrollObserver('.collection__item', '.collection__img-wrapper');
});
// let showMoreBtn = document.querySelector(".show-more__btn");
//
// showMoreBtn.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	this.classList.toggle("open");
// 	if (this.classList.contains("open")) {
// 		this.textContent = "Show less";
// 		this.insertAdjacentHTML('afterbegin', '<span class="icon"></span>');
// 	} else {
// 		this.textContent = "Show more";
// 		this.insertAdjacentHTML('afterbegin', '<span class="icon"></span>');
// 	}
// });

























