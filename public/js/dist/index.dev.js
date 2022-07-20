"use strict";

$('#banner').slick({
  autoplay: true,
  // dots: true,
  infinite: true,
  speed: 1500,
  fade: true,
  cssEase: 'linear'
});
$('.list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
});