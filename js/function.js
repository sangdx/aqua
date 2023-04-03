function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
!(function ($) {



  $(document).ready(function () {
    //var count = $('.switch-swiper').attr('data-count');
    //if( count < 3 ){ count = 3; }
    // switch-swiper
    var swiper = new Swiper('.switch-swiper', {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 1,
      // loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        275: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        375: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });

    // swiper-s2
    var swiper = new Swiper('.swiper-s2', {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      // loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // slide-fox
    var swiper = new Swiper('.slide-fox', {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 1,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });

    //var serviceCount = $('.swiper-service').attr('data-count');
    //if( serviceCount < 4 ){ serviceCount = 4; }
    // swiper-service
    var swiper = new Swiper('.swiper-service', {
      slidesPerView: 4,
      spaceBetween: 24,
      breakpoints: {
        0: {
          slidesPerView: 1.2
        },
        575: {
          slidesPerView: 1.3
        },
        768: {
          slidesPerView: 1.5
        },
        992: {
          slidesPerView: 2.5
        },
        1199: {
          slidesPerView: 3.2
        },
        1200: {
          slidesPerView: 4
        }
      }
    });
    // device-swiper
    // var thumbCount = $('.device-swiper-thumbs').attr('data-count');
    //if( thumbCount < 3 ){ thumbCount = 3; }
    // var allowTouchMove = thumbCount > 3 ? true : false;
    var galleryThumbs = new Swiper('.device-swiper-thumbs', {
      spaceBetween: 15,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      // allowTouchMove: allowTouchMove,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
      // breakpoints: {
      //   0: {
      //     slidesPerView: 1.7
      //   },
      //   575: {
      //     slidesPerView: 2.3
      //   },
      //   768: {
      //     slidesPerView: 2.3
      //   },
      //   992: {
      //     slidesPerView: 2.5
      //   },
      //   1024: {
      //     slidesPerView: 3
      //   }
      // }
    });
    var galleryTop = new Swiper('.device-swiper-top', {
      spaceBetween: 15,
      thumbs: {
        swiper: galleryThumbs
      }
    });
    // homepage

    categorySlider('#nav-home-0');
    function categorySlider(tabId) {
      var thumb = $(tabId).find('.tab-device-thumbs');
      var top = $(tabId).find('.tab-device-top');
      var galleryThumbs = new Swiper(thumb, {
        spaceBetween: 15,
        slidesPerView: 3,

      });
      var galleryTop = new Swiper(top, {
        spaceBetween: 15,

        thumbs: {
          swiper: galleryThumbs
        }
      });
    }

    $('#nav-tab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var tabId = $(e.target).attr("href");
      categorySlider(tabId);
    });
  });
})(jQuery);