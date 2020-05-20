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

    setTimeout(function () {
        var canvas = document.createElement("canvas");
        c = canvas.getContext('2d');

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        var imageData = c.createImageData(canvas.width, canvas.height);
        document.body.appendChild(canvas);

        (function loop() {

            for (var i = 0, a = imageData.data.length; i < a; i++) {
                imageData.data[i] = (Math.random() * 20) | 0;
            }

            c.putImageData(imageData, 0, 0);
            requestAnimationFrame(loop);

        })();
    }, 0);


    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });
    $(".work__link").on("mouseenter", function () {
        cursor.addClass("active2");
        follower.addClass("active2");
    });
    $(".work__link").on("mouseleave", function () {
        cursor.removeClass("active2");
        follower.removeClass("active2");
    });


    var $input = $('.contact__input'),
        $buffer = $('.contact__input--buffer');

    $input.on('input', function () {
        $buffer.text($input.val());
        $input.width($buffer.width());
    });


});
