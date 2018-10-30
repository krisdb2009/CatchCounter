Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}
$(document).ready(function() {
    $.getJSON('./src/pages/home/quotes.json', function(quotes) {
        $('#quotes').text(quotes[0]); 
    });
    if(typeof mem.homeCounter == 'undefined' || mem.homeCounter == false) {
        mem.homeCounter = true;
        setTimeout(function() {
            setInterval(function() {
                $('#jscounter').text((parseInt($('#jscounter').text()) + 1).pad(6));
            }, 500);
        }, 1000);
    }
});