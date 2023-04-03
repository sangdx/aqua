$('#homepage-promotion-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    nextArrow: '<span class="promote-slide-control next-slide"><span class="arrow"></span></span>',
    prevArrow: '<span class="promote-slide-control prev-slide"><span class="arrow"></span></span>',
    speed: 1000,
    pauseOnHover: true,
    centerPadding: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1081,
        settings: {
            touchThreshold: 20,
            arrows: false,
            dots: true,
            slidesToShow: 3,
            centerPadding: 0
        }
    }]
})