$(function() {

    const $win = $(window);

    (function() {
        const $btnMenu = $('.btn-menu');
        const $nav = $('header > nav');
        const isAnimate = 'is-animate';
        const isOpen = 'is-open';

        // ボタンクリック時の処理
        $btnMenu.on('click', function() {
            const $this = $(this);
            //ボタンをクリックしたときの記述
            if ($nav.is(':animated')) {　
                return;　
            }
            if (!$this.hasClass(isOpen)) {
                $nav.slideDown();
                $this.addClass(isOpen).addClass(isAnimate);
            } else {
                $nav.slideUp();
                $this.removeClass(isOpen).removeClass(isAnimate);
            }
        });

        // ウィンドウリサイズ時の処理
        $win.on('resize', function() {
            if ($win.width() > 845) {
                $nav.show();
                $btnMenu.removeClass(isOpen).removeClass(isAnimate);
            } else {
                if (!$btnMenu.hasClass(isOpen)) {
                    $nav.hide();
                }
            }
        });
    })();


    // スムーススクロール
    (function() {
        const $body = $('body, html');
        const duration = 1000;
        const motion = 'swing';


        $('a[href^="#"]').on('click', function() {
            const $this = $(this);
            const href = $this.attr('href');
            const target = href === '#top' ? 'body' : href;
            const position = $(target).offset().top;
            $body.animate({ scrollTop: position }, duration, motion);
        });
    })();

});