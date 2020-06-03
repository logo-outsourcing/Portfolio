$(document).ready(function () {
    const { Splitting } = window
    Splitting()
    window.ScrollOut({
        scrollingElement: '.container',
        targets: '.text',
    })

    var figure = $(".motion__player").hover( hoverVideo, hideVideo );

    function hoverVideo(e) { $('video', this).get(0).play(); }
    function hideVideo(e) { $('video', this).get(0).pause(); }

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

});
