import {
	testimonilasSwiper,
	popup,
	burgerMenu,
	capabilities,
	downloadButton, technologies, focusVisible, capabilitiesSwiper,

} from "./modules/functions.js";
import {accordion} from "./modules/functions.js";



document.addEventListener('DOMContentLoaded', () => {
	testimonilasSwiper;
	accordion();
	popup('a[data-popup-contact]', 'img[data-popup-contact-close]', '.popup-contact');
	popup('a[data-popup-expert]', 'img[data-popup-expert-close]', '.popup.popup--expert');
	popup('a[data-popup]', 'img[data-popup-expert-close]', '.popup.popup--expert');
	popup('a[data-popup-expert-mobile]', 'img[data-popup-expert-close]', '.popup.popup--expert');
	popup('a[data-popup-expert-mobile-header]', 'img[data-popup-expert-close]', '.popup.popup--expert');
	burgerMenu();
	capabilitiesSwiper();
	downloadButton();
	technologies();
})
