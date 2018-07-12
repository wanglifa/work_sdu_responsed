(function(){
    /*轮播图*/
    var swiper = new Swiper('.banner .swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.banner .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    /*衔接院校*/
    var sw1 = new  Swiper('.college .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // init: false,
        pagination: {
            el: '.college .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });
    /*移动适配下的导航按钮*/
    $(".mobile .navbar-toggle").click(function () {
        $(".navbar-collapse").slideToggle();
        return false;
    })
    $("body").click(function () {
        $(".navbar-collapse").css("display","none");
    })

    var sw4 = new Swiper('.swiper-container.coll-m-n', {
        slidesPerView: 4.5,
        spaceBetween: 10,
        loop: false
    });

    /*企业认可函*/
    var sw2 = new  Swiper('.company .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        // init: false,
        pagination: {
            el: '.company .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });

    var sw3 = new  Swiper('.college-lic .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        // init: false,
        pagination: {
            el: '.college-lic .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 2,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 2,
            }
        }
    });
})()