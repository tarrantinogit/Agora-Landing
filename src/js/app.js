import {
	testimonilasSwiper,
	burgerMenu,
	accordion,
	downloadButton,
	capabilitiesSwiper,
	symbolsCounter,
	scroll,
	inputsValidation,
	techSwiper,
	popup,
} from './modules/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
	scroll();
	testimonilasSwiper;
	techSwiper;
	accordion();
	burgerMenu();
	capabilitiesSwiper();
	downloadButton();
	symbolsCounter();
	inputsValidation();
	popup('a[data-popup-contact]', 'img[data-popup-contact-close]', '.popup-contact');
});
