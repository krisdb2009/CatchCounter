Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}
$(document).ready(function() {
    $('#readMore').click(function() {
        $('html').animate({
           scrollTop: $('#viewport').offset().top + $('#viewport').outerHeight()
        }, 300);
    });
    $.getJSON('./src/pages/home/quotes.json', function(quotes) {
        $.each(quotes, function() {
            $('<span></span>').text(this).appendTo('#quotes');
        });
        var count = 0;
        function tickQuotes() {
            var quotes = $('#quotes > span');
            quotes.removeClass('visible');
            $(quotes[count++]).addClass('visible');
            if(quotes.length == count) {
                count = 0;
            }
        }
        setInterval(tickQuotes, 3000);
        tickQuotes();
    });
    setTimeout(function() {
        setInterval(function() {
            $('#jscounter').text((parseInt($('#jscounter').text()) + 1).pad(6));
        }, 500);
    }, 1000);
});