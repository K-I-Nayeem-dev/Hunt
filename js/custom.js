$(function(){
    $(".banner-main").slick({
        slidesToShow:1,
        slidesToScroll:1,
        speed: 1000,
        nextArrow: ".next",
        prevArrow: ".prev",
    })
    $(".ser-main").slick({
        slidesToShow:3,
        slidesToScroll:1,
        speed: 1000,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: ".nexxt",
        prevArrow: ".preev",
    })

    // testi part js start
    $('.testi_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testi_img',
        speed: 1000,
      });
      $('.testi_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testi_main',
        centerMode: true,
        vertical: true,
        centerPadding: "0px",
        nextArrow: ".nexxxt",
        prevArrow: ".preeev",
        speed: 1000,
      });    

    // testi part js end

    // counter part js start

    $('.counter').counterUp({
    delay: 10,
    time: 1000
});

    // counter part js end

})