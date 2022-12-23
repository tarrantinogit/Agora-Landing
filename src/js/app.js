import {
	testimonilasSwiper,
	popup,
	burgerMenu,
	accordion,
	downloadButton, technologies, capabilitiesSwiper, symbolsCounter, scroll,

} from "./modules/helpers.js";




document.addEventListener('DOMContentLoaded', () => {
	scroll();
	testimonilasSwiper;
	accordion();
	popup('a[data-popup-contact]', 'img[data-popup-contact-close]', '.popup-contact');
	burgerMenu();
	capabilitiesSwiper();
	downloadButton();
	technologies();
	symbolsCounter();
})
