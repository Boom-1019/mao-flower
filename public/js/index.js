
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
    autoplaySpeed: 3000,
  });
  


// 捲軸事件

// 定義捲軸高變數
let offsetTop
let product1Top = $('.section-1').offset().top 
$(window).scroll(function(){
    offsetTop = $(window).scrollTop()
    //console.log( '捲軸高', offsetTop )
    // console.log('product1',product1Top)
//    if( offsetTop >=  product1Top){
//         console.log('test')
//    }


    // 捲軸高度>=400，會出現page-top的按鈕
    if( offsetTop >= 400){
        $('.page-top').addClass('active')
    }else{
        $('.page-top').removeClass('active')
    }
})//scroll end
  // 點按page-top回到最上方
$('.page-top').on('click', function(){
  $('html, body').animate({ scrollTop: 0 })
})//.page-top


$('#nav-intro').click(function() {
  $('html,body').animate({ scrollTop: $("#about-mao").offset().top - 8 }, 200)
});
$('#nav-service').click(function() {
  $('html,body').animate({ scrollTop: $("#service-section").offset().top - 20 }, 200)
});
$('#nav-gift').click(function() {
  $('html,body').animate({ scrollTop: $("#gift-section").offset().top - 40 }, 200)
})
$('#nav-concact').click(function() {
  $('html,body').animate({ scrollTop: $("#concact-section").offset().top - 40 }, 200)
})
