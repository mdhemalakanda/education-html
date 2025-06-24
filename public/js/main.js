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
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
        }
    });

})(jQuery)