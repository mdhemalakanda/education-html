(function($) {
    "use strict";
   $(document).ready(function(e) {
        // Toogle text and show more btn.
       $(document).on('click', '.ed-course-archive-show-more-btn', function(e) {
            e.preventDefault();

            $('.ed-course-description-content').toggleClass('ed-visible');

            const $btn = $(this);
            const $text = $btn.find('span');
            const $icon = $btn.find('i');

            $text.text($text.text().trim() === 'Show more' ? 'Show less' : 'Show more');
            $icon.toggleClass('fa-angle-down fa-angle-up');
        });




        // custom accordion.
        $(document).on( 'click', '.ed-course-material-accordion-head', function(e) {
            const $this = $(e.currentTarget);

            $this.closest('.ed-coruse-material-accordion-single').find('.ed-course-material-accordion-body-wrapper').slideToggle(500);
            $this.closest('.ed-coruse-material-accordion-single').toggleClass('ed-collapsed');
        } )

        $(document).on( 'click', '.ed-filter-collapse', function(e) {
            const $this = $(e.currentTarget);
            $this.closest('.ed-filter-widget').find('.ed-filter-widget-list-wrapper').slideToggle(500);
            $this.find('i').toggleClass('fa-minus').toggleClass('fa-plus');
        } )

        $(document).on('click', '.ed-toggle-course-filter-collapsed', function() {
            $('.ed-course-archive-filter-collapsed').slideToggle(500);
            $('.ed-archive-course-col-sidebar').toggleClass('ed-archive-course-sidebar-collapsed');
            $('.ed-offcanvas-overlay').toggleClass('active');
            $('.ed-course-archive-offcanvas').toggleClass('active');
        })

        $('.ed-offcanvas-close-btn').on( 'click', function() {
            $('.ed-offcanvas-overlay').toggleClass('active');
            $('.ed-course-archive-offcanvas').toggleClass('active');
        } )

        $('.ed-offcanvas-overlay').on( 'click', function() {
             $('.ed-offcanvas-overlay').toggleClass('active');
            $('.ed-course-archive-offcanvas').toggleClass('active');
        } )

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
                768: {
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
                768: {
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
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2
                }
            }
        });
        
        // teacher activation.
        const teacherActive = new Swiper('.ed-instructor-active-2', {
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
             navigation: {
                nextEl: '.ed-instructor-2-next',
                prevEl: '.ed-instructor-2-prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2
                }
            }
        });

        // testimonial 2 active.
        const testimonialTwoControls = new Swiper('.ed-testimonial-2-paginate-controls', {
            loop: false,
            spaceBetween: 30,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            allowTouchMove: true,

            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                }
            }
        });

        const testimonialTwoActive = new Swiper('.ed-testimonial-main-slider-2-active', {
            loop: false,
            autoplay: false,
            navigation: {
                nextEl: '.ed-testimonial-3-next',
                prevEl: '.ed-testimonial-3-prev',
            },
            thumbs: {
                swiper: testimonialTwoControls,
            }
        });

   })


})(jQuery)