/**
 * Created by marcus on 10/4/16.
 */

(function ($) {

    $(window).load(function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

    $(document).ready(function () {

        $(".button-collapse").sideNav();

        $('.header').sticky({
            topSpacing: 0
        });

        $(".js-height-full").height($(window).height());

        $(window).resize(function () {
            $(".js-height-full").height($(window).height());
        });

        //var wow = new WOW({
        //    mobile: false
        //});
        //wow.init();
    });

})(jQuery);
