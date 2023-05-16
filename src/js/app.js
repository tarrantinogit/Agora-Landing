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
	changeText
} from './modules/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
	scroll();
	headerMenu();
	changeText('.multilingual__flag.multilingual__flag--more', '+3 <br> more');
	changeText('.read-more__btn.read-more__btn--apache', 'Apache 2.0');
	testimonilasSwiper;
	accordion();
	burgerMenu();
	capabilitiesSwiper();
	downloadButton();
	symbolsCounter();
	inputsValidation();
	popup('a[data-popup-contact]', 'img[data-popup-contact-close]', '.popup-contact');
});
