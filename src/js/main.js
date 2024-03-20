$(".center").slick({
  centerMode: true,
  centerPadding: "120px",
  rows: 2,
  initialSlide: 1,
  slidesToShow: 2,
  sliderToScroll: 1,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
