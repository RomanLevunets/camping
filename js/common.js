$(document).ready(function() {


    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    //height service-top block====
    function item(){
        $('.content-options').each(function () {
            var ths = $(this),
                thsh = ths.find('.options-item').outerHeight();
            ths.find('.options-item').css('min-height', thsh);
        });
    }item();

    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.aside-tabs').slideToggle('slow');

    });
    ///
    function item1(){
        $('.price').each(function () {
            var ths = $(this),
                thsh = ths.find('.price-item').outerHeight();
            ths.find('.price-item').css('min-height', thsh);
        });
    }item1();

////
    function item2(){
        $('.order').each(function () {
            var ths = $(this),
                thsh = ths.find('.order-item').outerHeight();
            ths.find('.order-item').css('min-height', thsh);
        });
    }item2();

    ///

    function item3(){
        $('.aside-tabs').each(function () {
            var ths = $(this),
                thsh = ths.find('.aside-right').outerHeight();
            ths.find('.aside-tabs').css('min-height', thsh);
        });
    }item3();

    //header menu active
        $('.siteMenu li').click(function() {
            if (!$(this).hasClass('active')) {
                $('.siteMenu li').removeClass('active');
                $(this).addClass('active');
            }
    });

    $('.mainMenu li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.mainMenu li').removeClass('active');
            $(this).addClass('active');
        }
    });


    $('.pagination li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.pagination li').removeClass('active');
            $(this).addClass('active');
        }
    });


    $('.gallery1 li a').fancybox({
        'loop': true,
        'showNavArrows': true
    });

    $('.price-item > a').fancybox({
    });


    $('.row1-sm-item, .row1-md, .row4-item').fancybox({
        'loop': true,
        'showNavArrows': true
    });
});

