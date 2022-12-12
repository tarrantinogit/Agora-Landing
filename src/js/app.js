import {
	testimonilasSwiper,
	popup,
	burgerMenu,
	capabilities,
	solutions,
	technologies, downloadButton,

} from "./modules/functions.js";
import {accordion} from "./modules/functions.js";

function throttle(callee, timeout) {

	let timer = null

	return function perform(...args) {

		if (timer) return


		timer = setTimeout(() => {

			callee(...args)


			clearTimeout(timer)
			timer = null
		}, timeout)
	}
}

document.addEventListener('DOMContentLoaded', () => {
	testimonilasSwiper;
	accordion();
	popup('a[data-popup-contact]', 'img[data-popup-contact-close]', '.popup-contact');
	popup('a[data-popup-expert]', 'img[data-popup-expert-close]', '.popup.popup--expert');
	popup('a[data-popup]', 'img[data-popup-expert-close]', '.popup.popup--expert');
	popup('a[data-popup-expert-mobile]', 'img[data-popup-expert-close]', '.popup.popup--expert');
	popup('a[data-popup-expert-mobile-header]', 'img[data-popup-expert-close]', '.popup.popup--expert');
	burgerMenu();
	capabilities();
	solutions();
	technologies();
	downloadButton();
})
