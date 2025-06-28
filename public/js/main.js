(function($) {
    "use strict";
    const bannerCarousel = new Swiper('.ed-banner-course-carousel-active', {
        loop: true,
        clickable: true,
        pagination: {
            el: '.ed-banner-coiurse-carousel-dot',
            clickable: true,
            type: 'custom',
            renderCustom: function(swiper, current, total) {
                let paginationHTML = '';
                for (let i = 1; i <= total; i++) {
                    paginationHTML += `<span class="swiper-pagination-bullet${i === current ? ' swiper-pagination-bullet-active' : ''}" data-index="${i}">${i}</span>`;
                }
                return paginationHTML;
            }
        },
    });

    const crossSlideActive = new Swiper('.ed-cross-course-slide-active', {
        effect: "cards",
        grabCursor: true,
        breakpoints: {
            0: {
                effect: "fade",
            },
            991: {
                effect: "fade"
            },
            992: {
                effect: "cards"
            }
        }
    });

    const testimonialSwiper = new Swiper('.ed-testimonial-active', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // team activation.
    const teamActive = new Swiper('.ed-team-active', {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".ed-team-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 4
            }
        }
    });

    // team activation.
    const blogActive = new Swiper('.ed-blog-active', {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".ed-blog-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2
            }
        }
    });


})(jQuery)