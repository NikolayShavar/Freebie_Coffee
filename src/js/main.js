
$('.center').slick({
    centerMode: true,
    centerPadding: '31px',
    rows: 2,
    slidesToShow: 2,
    sliderToScroll:1,
    // scrollLeft: falce ,
    // gap:31,
    // variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });

  $('.choose-box__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-slide').removeClass('not-in-center');
    $('.slick-slide').not('.slick-center').addClass('not-in-center');
  });