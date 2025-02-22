$(document).ready(function(){

  $('.banner-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    // nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
    // prevArrow: '<button class="slick-arrow prev"><i class="icon-next"></i></button>',
    responsive: [
      {
          breakpoint: 767,
          settings: {
            vertical: false,
            verticalSwiping: false,
          }
      }
    ]
  });

  $('.filter-slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-next"></i></button>',
      responsive: [
          {
              breakpoint: 1500,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-next"></i></button>',
              }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-next"></i></button>',
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-next"></i></button>',
            }
          },
          {
              breakpoint: 767,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-next"></i></button>',
              }
          }
      ]
  });

  $('.filter-item .img').matchHeight({
      byRow: false
  });

  $('.filter-item p').matchHeight({
      byRow: false
  });

  $('.products-item h4').matchHeight({
      byRow: true
  });

  $('.products-item p').matchHeight({
      byRow: true
  });

  jcf.replaceAll();



});

$(window).resize(function(){



});

