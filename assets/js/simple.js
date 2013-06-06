// http://stackoverflow.com/a/3855394
(function ($) {
    $.queryString = (function (a) {
        var i,
            p,
            b = {};
        if (a === "") {
            return {};
        }
        for (i = 0; i < a.length; i += 1) {
            p = a[i].split('=');
            if (p.length === 2) {
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
        }
        return b;
    }(window.location.search.substr(1).split('&')));
}(jQuery));

$(function () {
    var carouselCounter = 0;

    $('.carousel').each(function () {
        carouselCounter++;

        var length = 0;
        var id = 'carousel-' + carouselCounter;

        $(this).attr('id', id);

        if ((length = $(this).find('.carousel-inner .item').length) > 1) {
            if ($(this).find('ol.carousel-indicators').length === 0) {
                var indicators = $('<ol class="carousel-indicators"></ol>');

                for (var i = 0; i < length; i++) {
                    var indicator = $('<li></li>');

                    indicator.data('target', '#' + id);
                    indicator.data('slide-to', indicator);

                    if (0 === i) {
                        indicator.addClass('active');
                    }

                    indicators.append(indicator);
                }

                $(this).prepend(indicators);

                $(this).append($('<a class="carousel-control left" data-slide="prev">&lsaquo;</a>').attr('href', '#' + id));
                $(this).append($('<a class="carousel-control right" data-slide="next">&rsaquo;</a>').attr('href', '#' + id));
            }

            $(this).find('.carousel-inner .item:first-child').addClass('active');

            $(this).carousel();
        }
    });
});

