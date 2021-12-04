 $(function() {
     var _window = $(window),
         _header = $('nav'),
         logoBottom;

     _window.on('scroll', function() {
         logoBottom = $('.logo').height();
         if (_window.scrollTop() > logoBottom) {
             _header.addClass('fixed');
         } else {
             _header.removeClass('fixed');
         }
     });

     _window.trigger('scroll');
 });