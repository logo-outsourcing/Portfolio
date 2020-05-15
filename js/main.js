$(document).ready(function () {

    // $(document).on( 'scroll', function(){
    //     var scrollHeight = Math.max(
    //         document.body.scrollHeight, document.documentElement.scrollHeight,
    //         document.body.offsetHeight, document.documentElement.offsetHeight,
    //         document.body.clientHeight, document.documentElement.clientHeight
    //     );
    //
    //    console.log( 'Высота с учётом прокрутки: ' + window.pageYOffset  );
    // });


    $('.header__title--element').addClass('header__title--active')
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

// $(".link").on("mouseenter", function() {
//     cursor.addClass("active");
//     follower.addClass("active");
// });
// $(".link").on("mouseleave", function() {
//     cursor.removeClass("active");
//     follower.removeClass("active");
// });


$(".work__link").on("mouseenter", function () {
    cursor.addClass("active2");
    follower.addClass("active2");
});
$(".work__link").on("mouseleave", function () {
    cursor.removeClass("active2");
    follower.removeClass("active2");
});


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

var canvas = document.createElement("canvas");
c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var imageData = c.createImageData(canvas.width, canvas.height);
document.body.appendChild(canvas);

(function loop() {

    for (var i = 0, a = imageData.data.length; i < a; i++) {
        imageData.data[i] = (Math.random() * 255) | 0;
    }

    c.putImageData(imageData, 0, 0);
    requestAnimationFrame(loop);

})();

var $input = $('.contact__input'),
    $buffer = $('.contact__input--buffer');

$input.on('input', function () {
    $buffer.text($input.val());
    $input.width($buffer.width());
});



});