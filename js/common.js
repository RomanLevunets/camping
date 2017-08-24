$(document).ready(function() {


    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        speed: 700,
    });

    //height service-top block====
    function item(){
        $('.content-options').each(function () {
            var ths = $(this),
                thsh = ths.find('.options-item').outerHeight();
            ths.find('.options-item').css('min-height', thsh);
        });
    }item();

////
    function item(){
        $('.order').each(function () {
            var ths = $(this),
                thsh = ths.find('.order-item').outerHeight();
            ths.find('.order-item').css('min-height', thsh);
        });
    }item();

    ///

    function item(){
        $('.aside-tabs').each(function () {
            var ths = $(this),
                thsh = ths.find('.aside-right').outerHeight();
            ths.find('.aside-tabs').css('min-height', thsh);
        });
    }item();

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

    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.menu').toggleClass('open');
        $('.wrapper').toggleClass('bg-active');

    });

    $('.gallery1 li a').fancybox({
        'loop': true,
        'showNavArrows': true
    });

});

