$(document).ready(function () {

    $('.work__button').on('click', function () {
        console.log(1);
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
    });
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
    var canvasGrain = $('.grain');
    canvasGrain.each(function () {
        class Grain {
            constructor(el) {
                /**
                 * Options
                 * Increase the pattern size if visible pattern
                 */
                this.patternSize = 150;
                this.patternScaleX = 1;
                this.patternScaleY = 1;
                this.patternRefreshInterval = 3; // 8
                this.patternAlpha = 15; // int between 0 and 255,

                /**
                 * Create canvas
                 */
                this.canvas = el;
                this.ctx = this.canvas.getContext('2d');
                this.ctx.scale(this.patternScaleX, this.patternScaleY);

                /**
                 * Create a canvas that will be used to generate grain and used as a
                 * pattern on the main canvas.
                 */
                this.patternCanvas = document.createElement('canvas');
                this.patternCanvas.width = this.patternSize;
                this.patternCanvas.height = this.patternSize;
                this.patternCtx = this.patternCanvas.getContext('2d');
                this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
                this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

                /**
                 * Prebind prototype function, so later its easier to user
                 */
                this.resize = this.resize.bind(this);
                this.loop = this.loop.bind(this);

                this.frame = 0;

                window.addEventListener('resize', this.resize);
                this.resize();

                window.requestAnimationFrame(this.loop);
            }

            resize() {
                this.canvas.width = window.innerWidth * devicePixelRatio;
                this.canvas.height = window.innerHeight * devicePixelRatio;
            }

            update() {
                const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;

                // put a random shade of gray into every pixel of the pattern
                for (let i = 0; i < patternPixelDataLength; i += 4) {
                    // const value = (Math.random() * 255) | 0;
                    const value = Math.random() * 255;

                    patternData.data[i] = value;
                    patternData.data[i + 1] = value;
                    patternData.data[i + 2] = value;
                    patternData.data[i + 3] = patternAlpha;
                }

                patternCtx.putImageData(patternData, 0, 0);
            }

            draw() {
                const {ctx, patternCanvas, canvas, viewHeight} = this;
                const {width, height} = canvas;

                // clear canvas
                ctx.clearRect(0, 0, width, height);

                // fill the canvas using the pattern
                ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
                ctx.fillRect(0, 0, width, height);
            }

            loop() {
                // only update grain every n frames
                const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
                if (shouldDraw) {
                    this.update();
                    this.draw();
                }

                window.requestAnimationFrame(this.loop);
            }
        }


        /**
         * Initiate Grain
         */
        const el = document.querySelector('.grain');
        const grain = new Grain(el);

    });
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
