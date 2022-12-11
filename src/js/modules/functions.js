import Swiper from "swiper/bundle";



export const testimonilasSwiper = new Swiper('.swiper.testimonials__swiper', {
	direction: 'horizontal',
	loop: false,
	centeredSlides: true,
	slidesPerView: "2",
	spaceBetween: 32,
	calculateHeight: true,
	initialSlide: 2,
	mousewheel: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="swiper-pagination-bullet"></span>`;
		},
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



	if (document.querySelector('.a[data-contact-us-close]')) {
		document.querySelector('.a[data-contact-us-close]').addEventListener('click', (e) => {
		if (e.target) {
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
			if (e.target) {
				popup.classList.remove('active');
				overlay.classList.remove('active');
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

	burgerBtn.addEventListener('click', (e) => {
		if (e.target) {
			burgerBtn.classList.toggle('active');
			mobileMenu.classList.toggle('active');
		}
	})
}


export function capabilities() {
	if (document.body.clientWidth <= 993) {
		const section = document.querySelector('.capabilities');
		const sectionHeight  = section.offsetHeight;
		const positionTop = section.getBoundingClientRect().top
		const cards = document.querySelectorAll('.capabilities__wrapper .cards__wrapper .card');
		let cardsLeft = [];
		let cardsRight =[];

		cardsLeft.push(cards[0], cards[1], cards[4], cards[5])
		cardsRight.push(cards[2], cards[3], cards[6], cards[7])


		document.addEventListener('scroll', (e) => {
			let positionTop = section.getBoundingClientRect().top + 200
			let transitionNumber1 = (sectionHeight * positionTop ) * 0.1 / 1000
			let transitionNumber2 = ((sectionHeight * positionTop) * 0.1 / 1000) * -1

			if (positionTop <= 0) {
				cardsLeft.forEach(cardLeft => {
					cardLeft.style.transform = `translateX(${transitionNumber1}%)`;
				})
				cardsRight.forEach(cardRight => {
					cardRight.style.transform = `translateX(${transitionNumber2}%)`;
				})
			}
			else{
				cardsLeft.forEach(cardLeft => {
					cardLeft.style.transform = `translateX(${transitionNumber1}%)`;
				})
				cardsRight.forEach(cardRight => {
					cardRight.style.transform = `translateX(${transitionNumber2}%)`;
				})
			}
		})
	}

}


export function solutions() {
	if (document.querySelector(".solutions")) {
		let prevSlide;
		let activeSlide;
		let slides = document.querySelectorAll(".solutions__card-wrapper");
		let triggerOfTop = document.querySelector(".solutions__card-wrapper .card__title-wrapper").getBoundingClientRect().top + scrollY; // РАССТОЯНИЕ от triger до верха страницы
		let scrollPercent = (scrollY - triggerOfTop + window.innerHeight) / window.innerHeight;

		function updateParams(e) {
			triggerOfTop = document.querySelector(".solutions__card-wrapper .card__title-wrapper").getBoundingClientRect().top + scrollY; // РАССТОЯНИЕ от нужной секции до верха страницы
			scrollPercent = (scrollY - triggerOfTop + window.innerHeight) / window.innerHeight;
		}

		function changeSlide(activeSlide) {
			if (prevSlide !== activeSlide) {
				prevSlide = activeSlide;
				slides.forEach((elem) => {
					elem.classList.remove("_active");
				});
				setItemsContainerHeight(slides[activeSlide]);
				slides[activeSlide].classList.add("_active");
			}
		}
		function scrollPage() {
			updateParams();

			if (scrollPercent < 0.45) {
				activeSlide = 0;
				changeSlide(activeSlide);
			}
			if (scrollPercent >= 0.45 && scrollPercent < 0.8) {
				activeSlide = 1;
				changeSlide(activeSlide);
			}
			if (scrollPercent >= 0.8) {
				activeSlide = 2;
				changeSlide(activeSlide);
			}
		}

		function setItemsContainerHeight(activeElement) {
			let activeElementHeight = activeElement.scrollHeight;
			document.documentElement.style.setProperty("--height-items-container", `${activeElementHeight}px`);
		}

		window.addEventListener("scroll", scrollPage);
		window.addEventListener("resize", updateParams);
	}
}


export function technologies() {
	if (document.querySelector(".technologies")) {
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

			function updateParamsTest2(e) {
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

			function scrollPageTest2() {
				trigger2ContainerOfTop = document.querySelector(".technologies__trigger").getBoundingClientRect().top + scrollY;
				trigger2Height = document.querySelector(".technologies__trigger").offsetHeight;
				scrollPercent2Container = (scrollY - trigger2ContainerOfTop + window.innerHeight) / (window.innerHeight + trigger2Height);

				console.log(scrollPercent2Container); // temp

				if (scrollPercent2Container >= 0 && scrollPercent2Container <= 1) {
					if (windowInnerWidth < 992) {
						oneRow.style.cssText = `transform: translateX(-${(oneRowWidth - test2WrapperWidth) * scrollPercent2Container}px );`;
						twoRow.style.cssText = `transform: translateX(${(twoRowWidth - test2WrapperWidth) * scrollPercent2Container}px );`;
					} else {
						test2Inner.style.cssText = `transform: translateX(-${(test2InnerWidth - test2WrapperWidth) * scrollPercent2Container}px );`;
					}
				}

				// ети два ифа стабилизирует положение в овер позиции, когда процент скролла необходимого отрезка мень ше 0 и больше  100% (1)
				if (scrollPercent2Container < 0) {
					if (windowInnerWidth <= 993) {
						oneRow.style.cssText = `transform: translateX(0px );`;
						twoRow.style.cssText = `transform: translateX(0px );`;
					} else {
						console.log(test2InnerWidth);
						test2Inner.style.cssText = `transform: translateX(0px );`;
					}
				}
				if (scrollPercent2Container > 1) {
					if (windowInnerWidth <= 993) {
						oneRow.style.cssText = `transform: translateX(-${oneRowWidth - test2WrapperWidth}px );`;
						twoRow.style.cssText = `transform: translateX(${twoRowWidth - test2WrapperWidth}px );`;
					} else {
						console.log(test2InnerWidth);
						test2Inner.style.cssText = `transform: translateX(-${test2InnerWidth - test2WrapperWidth}px );`;
					}
				}
			}

			window.addEventListener("scroll", scrollPageTest2);
			window.addEventListener("resize", updateParamsTest2);

	}
}