$('.js-achievements-slider').slick({
    dots: true,
    dotsClass: 'slider-block-buttons',
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.js-team-slider').slick({
    dots: true,
    dotsClass: 'main-slider-card__buttons',
    infinite: true,
    speed: 300,
    arrows: false,
  });

