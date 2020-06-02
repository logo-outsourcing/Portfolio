$(document).ready(function () {

    $('.work__button').on('click', function () {
    $('.ghost').toggleClass('ghost--open');
    $('.content-wrapper').toggleClass('content-wrapper--color');
    $('.header__link').toggleClass('header__link--color');
    $('.header__logo').toggleClass('header__logo--color');
    $('.header__title--element').toggleClass('header__title--color');
    $('.color-white').toggleClass('content-color--white');
    $('.color-gray').toggleClass('content-color--gray');
    $('.contact__inner').toggleClass('contact__inner--color');
    $('.clients__image').toggleClass('clients__image--color');
    $('.clients__image--mega').toggleClass('clients__image--color');
    $('.footer').toggleClass('footer__color');
    $('.footer__logo').toggleClass('footer__logo--color');
    $('.lampadario').toggleClass('lampadario--open');
    $('.work__button').toggleClass('work__button--close');
    //Get Mouse

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, dir: '' };
    let clicked = false;
    const getMouse = (e) => {
        mouse = {
            x: e.clientX || e.pageX || e.touches[0].pageX || 0 || window.innerWidth / 2,
            y: e.clientY || e.pageX || e.touches[0].pageY || 0 || window.innerHeight / 2,
            dir: (getMouse.x > e.clientX) ? 'left' : 'right'
        }
    };
    ['mousemove', 'touchstart', 'touchmove'].forEach(e => {
        window.addEventListener(e, getMouse);
    });
    window.addEventListener('mousedown', (e) => {
        e.preventDefault();
        clicked = true;
    });
    window.addEventListener('mouseup', () => {
        clicked = false;
    });


    /*--------------------
    Ghost Follow
    --------------------*/
    class GhostFollow {
        constructor (options) {
            Object.assign(this, options);

            this.el = document.querySelector('#ghost');
            this.mouth = document.querySelector('.ghost__mouth');
            this.eyes = document.querySelector('.ghost__eyes');
            this.pos = {
                x: 0,
                y: 0
            }
        }

        follow() {
            this.distX = mouse.x - this.pos.x;
            this.distY = mouse.y - this.pos.y;

            this.velX = this.distX / 8;
            this.velY = this.distY / 8;

            this.pos.x += this.distX / 10;
            this.pos.y += this.distY / 10;

            this.skewX = map(this.velX, 0, 100, 0, -50);
            this.scaleY = map(this.velY, 0, 100, 1, 2.0);
            this.scaleEyeX = map(Math.abs(this.velX), 0, 100, 1, 1.2);
            this.scaleEyeY = map(Math.abs(this.velX * 2), 0, 100, 1, 0.1);
            this.scaleMouth = Math.min(Math.max(map(Math.abs(this.velX * 1.5), 0, 100, 0, 10), map(Math.abs(this.velY * 1.2), 0, 100, 0, 5)), 2);

            if (clicked) {
                this.scaleEyeY = .4;
                this.scaleMouth = -this.scaleMouth;
            }

            this.el.style.transform = 'translate(' + this.pos.x + 'px, ' + this.pos.y + 'px) scale(.7) skew(' + this.skewX + 'deg) rotate(' + -this.skewX + 'deg) scaleY(' + this.scaleY + ')';
            this.eyes.style.transform = 'translateX(-50%) scale(' + this.scaleEyeX + ',' + this.scaleEyeY + ')';
            this.mouth.style.transform = 'translate(' + (-this.skewX*.5-10) + 'px) scale(' + this.scaleMouth + ')';
        }
    }


    /*--------------------
    Map
    --------------------*/
    function map (num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }


    /*--------------------
    Init
    --------------------*/
    const cursor1 = new GhostFollow();


    /*--------------------
    Render
    --------------------*/
    const render = () => {
        requestAnimationFrame(render);
        cursor1.follow();
    }
    render();
});
$('.lampadario__label').on('click', function () {
    $('.ghost').toggleClass('ghost--open');
    $('.content-wrapper').toggleClass('content-wrapper--color');
    $('.header__link').toggleClass('header__link--color');
    $('.header__logo').toggleClass('header__logo--color');
    $('.header__title--element').toggleClass('header__title--color');
    $('.color-white').toggleClass('content-color--white');
    $('.color-gray').toggleClass('content-color--gray');
    $('.contact__inner').toggleClass('contact__inner--color');
    $('.clients__image').toggleClass('clients__image--color');
    $('.clients__image--mega').toggleClass('clients__image--color');
    $('.footer').toggleClass('footer__color');
    $('.footer__logo').toggleClass('footer__logo--color');
    $('.lampadario').toggleClass('lampadario--open');
    $('.work__button').toggleClass('work__button--close');
    //Get Mouse

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