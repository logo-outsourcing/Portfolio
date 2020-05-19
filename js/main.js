$(document).ready(function () {


    $('.content-site').removeClass('hidden');
    setTimeout(function () {
        $('.header__title--element').addClass('header__title--active');
        (function () {
            var scroll = new LocomotiveScroll({
                el: document.querySelector('#js-scroll'),
                smooth: true,
                smoothMobile: true,
                touchMultiplier: 2,
                getSpeed: true,
                getDirection: true,
                inertia: 1,
                firefoxMultiplier: 50,
                useKeyboard: true,
                offset: [0, 0],
                repeat: true,
                class: "is-inview",
                scrollbarClass: "c-scrollbar",
                scrollingClass: "has-scroll-scrolling",
                draggingClass: "has-scroll-dragging",
                smoothClass: "has-scroll-smooth",
                initClass: "has-scroll-init",
            });

        })();
    }, 500);

    $('.block__link').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
    $('.header__link').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });

    var $input = $('.contact__input'),
        $buffer = $('.contact__input--buffer');

    $input.on('input', function () {
        $buffer.text($input.val());
        $input.width($buffer.width());
    });


});
