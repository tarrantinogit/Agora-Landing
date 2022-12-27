import Swiper from "swiper/bundle";


export function throttle(callee, timeout) {

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

export function downloadButton() {
	const downloadButtons = document.querySelectorAll('.input--file');
	const fileChosen = document.querySelectorAll('.download__text');
	const resetBtns = document.querySelectorAll('.download__reset-btn');

	downloadButtons.forEach((btn, index) => {
		btn.addEventListener('change', function (e) {
			fileChosen[index].textContent = this.files[0].name;
			resetBtns[index].classList.add('active');
		})
	})
	resetBtns.forEach((btn, index) => {
		btn.addEventListener('click', function (e) {
			btn.classList.remove('active');
			downloadButtons[index].value = '';
			fileChosen[index].textContent = 'Choose a file'
		})
	})

}

export function scroll() {
	document.querySelectorAll('.scroll-link').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
}


export const testimonilasSwiper = new Swiper('.swiper.testimonials__swiper', {
	direction: 'horizontal',
	centeredSlides: true,
	slidesPerView: "2",
	speed: 800,
	autoHeight: true,
	// roundLengths: true,
	loop: true,
	loopAdditionalSlides: 30,
	spaceBetween: 32,

	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		360: {
			slidesPerView: 1,
			spaceBetween: 32,
		},
		640: {
			slidesPerView: 1.5,
			spaceBetween: 32,
		},
		768: {
			slidesPerView: 1.8,
			spaceBetween: 32,
		},

	}
});

export function capabilitiesSwiper() {
	if (document.body.clientWidth <= 640) {
		const swiper = new Swiper('.capabilities__swiper.swiper', {
			direction: 'horizontal',
			loop: false,
			spaceBetween: 32,
			centeredSlides: true,
			slidesPerView: "auto",
			observer: true,
			observeParents: true,

			pagination: {
				el: ".capabilities__swiper-pagination",
				type: "fraction",
			},
			navigation: {
				nextEl: ".capabilities__swiper-button-next",
				prevEl: ".capabilities__swiper-button-prev",
			},
			breakpoints: {
				450: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				500: {
					slidesPerView: "auto",
					spaceBetween: 32,
				},
			}
		});

	}
}


export function accordion() {
	let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

	accordionItemHeaders.forEach(accordionItemHeader => {
		accordionItemHeader.addEventListener("click", event => {
			if (!event.target.classList.contains("active")) {
				accordionItemHeaders.forEach(accordionItemHeader => {
					let accordionItemBody = accordionItemHeader.nextElementSibling;
					if (accordionItemHeader.classList.contains("active")) {
						accordionItemHeader.classList.remove("active")
						accordionItemBody.style.maxHeight = 0;
					}
				});
			}
			accordionItemHeader.classList.toggle("active");
			let accordionItemBody = accordionItemHeader.nextElementSibling;

			if (accordionItemHeader.classList.contains("active")) {
				accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
			} else {
				accordionItemBody.style.maxHeight = 0;
			}
		});
	});
}


export function popup(btnSelector, btnCloseSelector, popupSelector) {
	const overlay = document.querySelector('.overlay');
	const btnOpen = document.querySelector(btnSelector);
	const popup = document.querySelector(popupSelector);
	const btnClose = document.querySelector(btnCloseSelector);
	const mobileMenu = document.querySelector('.header__burger-menu');


	if (document.querySelector('a[data-contact-us-close]')) {
		const mobileCloseBtn = document.querySelector('a[data-contact-us-close]');

		mobileCloseBtn.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
				popup.classList.remove('active');
				overlay.classList.remove('active');
				document.body.style.overflowY = 'visible';
			}
		});
	}

	btnOpen.addEventListener('click', (e) => {
		if (e.target) {
			e.preventDefault();
			document.body.style.overflowY = 'hidden';
			popup.classList.add('active');
			overlay.classList.add('active')
		}

		btnClose.addEventListener('click', (e) => {
			if (e.target && mobileMenu.classList.contains('active')) {
				document.body.style.overflowY = 'visible';
				popup.classList.remove('active');
			} else {
				overlay.classList.remove('active');
				popup.classList.remove('active');
				document.body.style.overflowY = 'visible';
			}
		})

		overlay.addEventListener('click', (e) => {
			if (e.target) {
				popup.classList.remove('active');
				overlay.classList.remove('active');
				document.body.style.overflowY = 'visible';
			}
		})
	})
}


export function burgerMenu() {
	const burgerBtn = document.querySelector('.header__burger');
	const mobileMenu = document.querySelector('.header__burger-menu');
	const overlay = document.querySelector('.overlay');
	const mobileMenuLinks = document.querySelectorAll('.header__burger-list-link');

	burgerBtn.addEventListener('click', (e) => {
		if (e.target && overlay.classList.contains('active')) {
			document.body.style.overflowY = 'visible';
			burgerBtn.classList.remove('active');
			mobileMenu.classList.remove('active');
			overlay.classList.remove('active');

		} else {
			burgerBtn.classList.add('active');
			mobileMenu.classList.add('active');
			overlay.classList.add('active');
			document.body.style.overflowY = 'hidden';
		}
	});
	mobileMenuLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			if (e.target && mobileMenu.classList.contains('active')) {
				burgerBtn.classList.remove('active');
				mobileMenu.classList.remove('active');
				overlay.classList.remove('active');
				document.body.style.overflowY = 'visible';
			}
		})
	})
	overlay.addEventListener('click', (e) => {
		if (e.target && mobileMenu.classList.contains('active')) {
			burgerBtn.classList.remove('active');
			mobileMenu.classList.remove('active');
			overlay.classList.remove('active');
			document.body.style.overflowY = 'visible';
		}
	});
}


export function technologies() {
	const tech = document.querySelector(".technologies");
	if (!tech) return null
	let oneRow = document.querySelector(".technologies__inner-first");
	let twoRow = document.querySelector(".technologies__inner-second");
	let test2Inner = document.querySelector(".technologies__inner");
	let test2WrapperWidth = document.querySelector(".technologies__items").offsetWidth;
	let test2InnerWidth = document.querySelector(".technologies__inner").offsetWidth;
	let oneRowWidth = document.querySelector(".technologies__inner-first").offsetWidth;
	let twoRowWidth = document.querySelector(".technologies__inner-second").offsetWidth;
	let trigger2ContainerOfTop = document.querySelector(".technologies__trigger").getBoundingClientRect().top + scrollY;
	let trigger2Height = document.querySelector(".technologies__trigger").offsetHeight;
	let scrollPercent2Container = (scrollY - trigger2ContainerOfTop + window.innerHeight) / (window.innerHeight + trigger2Height);
	let windowInnerWidth = window.innerWidth;

	function updateParams(e) {
		oneRow.style.transform = null;
		twoRow.style.transform = null;
		test2Inner.style.transform = null;
		test2WrapperWidth = document.querySelector(".technologies__items").offsetWidth;
		oneRowWidth = document.querySelector(".technologies__inner-first").offsetWidth;
		twoRowWidth = document.querySelector(".technologies__inner-second").offsetWidth;
		test2InnerWidth = document.querySelector(".technologies__inner").offsetWidth;
		trigger2ContainerOfTop = document.querySelector(".technologies__trigger").getBoundingClientRect().top + scrollY;
		trigger2Height = document.querySelector(".technologies__trigger").offsetHeight;
		scrollPercent2Container = (scrollY - trigger2ContainerOfTop + window.innerHeight) / (window.innerHeight + trigger2Height);
		windowInnerWidth = window.innerWidth;
	}

	function scrollPage() {
		trigger2ContainerOfTop = document.querySelector(".technologies__trigger").getBoundingClientRect().top + scrollY;
		trigger2Height = document.querySelector(".technologies__trigger").offsetHeight;
		scrollPercent2Container = (scrollY - trigger2ContainerOfTop + window.innerHeight) / (window.innerHeight + trigger2Height);


		if (scrollPercent2Container >= 0 && scrollPercent2Container <= 1) {
			if (windowInnerWidth < 992) {
				oneRow.style.cssText = `transform: translateX(-${(oneRowWidth - test2WrapperWidth) * scrollPercent2Container}px );`;
				twoRow.style.cssText = `transform: translateX(${(twoRowWidth - test2WrapperWidth) * scrollPercent2Container}px );`;
			} else {
				test2Inner.style.cssText = `transform: translateX(-${(test2InnerWidth - test2WrapperWidth) * scrollPercent2Container}px );`;
			}
		}

		if (scrollPercent2Container < 0) {
			if (windowInnerWidth <= 993) {
				oneRow.style.cssText = `transform: translateX(0px );`;
				twoRow.style.cssText = `transform: translateX(0px );`;
			} else {

				test2Inner.style.cssText = `transform: translateX(0px );`;
			}
		}
		if (scrollPercent2Container > 1) {
			if (windowInnerWidth <= 993) {
				oneRow.style.cssText = `transform: translateX(-${oneRowWidth - test2WrapperWidth}px );`;
				twoRow.style.cssText = `transform: translateX(${twoRowWidth - test2WrapperWidth}px );`;
			} else {
				test2Inner.style.cssText = `transform: translateX(-${test2InnerWidth - test2WrapperWidth}px );`;
			}
		}
	}

	const throttleScrollPage = throttle(scrollPage, 300)
	const throttleUpdateParams = throttle(updateParams, 300)

	window.addEventListener("scroll", throttleScrollPage);
	window.addEventListener("resize", throttleUpdateParams);

}


export function symbolsCounter() {
	const text = document.querySelectorAll('.label__text--additional span');
	const textArea = document.querySelectorAll('.input--textarea');
	textArea.forEach((input, index) => {
		input.addEventListener('input', (e) => {
			text[index].innerHTML = 500 - (+input.value.length)
		});
	})

}


export function inputsValidation() {

	const wpcf7Elm = document.querySelector('#wpcf7-f6-o2');
	if (document.querySelector('.input[aria-required="true"]')) {
		const inputs = wpcf7Elm.querySelectorAll('.input[aria-required="true"]');


		wpcf7Elm.addEventListener('wpcf7invalid', function (event) {
			inputs.forEach(input => {
				input.addEventListener('change', (e) => {
					if (input.getAttribute('aria-invalid') == 'true') {
						input.classList.remove('error');
					}
				})

				input.classList.add('error');


			})
		}, false);
	}
}


