$(".center").slick({
  centerMode: true,
  centerPadding: "120px",
  rows: 2,
  initialSlide: 1,
  slidesToShow: 2,
  sliderToScroll: 1,
  prevArrow: $('.choose-arrows__left'),
  nextArrow: $('.choose-arrows__right'),
  infinite: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        rows: 1,
        slidesToShow: 1,
        centerPadding: "100px",
        arrows: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        centerPadding: "10px",
      },
    },
  ],
});

$(".center").on("afterChange", function(event, slick, currentSlide) {
  $(".choose-arrows__left").toggle(currentSlide !== 0);
  $(".choose-arrows__right").toggle(currentSlide !== slick.slideCount - 1);
});
