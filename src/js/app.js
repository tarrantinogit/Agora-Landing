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
} from './modules/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
	scroll();
	headerMenu();

	testimonilasSwiper;
	accordion();
	burgerMenu();
	capabilitiesSwiper();
	downloadButton();
	symbolsCounter();
	inputsValidation();
	popup('a[data-popup-contact]', 'img[data-popup-contact-close]', '.popup-contact');
});
