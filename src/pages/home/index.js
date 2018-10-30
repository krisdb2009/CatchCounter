Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}
$(document).ready(function() {
    if(typeof mem.homeCounter == 'undefined' || mem.homeCounter == false) {
        mem.homeCounter = true;
        setTimeout(function() {
            setInterval(function() {

                $('#jscounter').text((parseInt($('#jscounter').text()) + 1).pad(6));
            }, 500);
        }, 1000);

    }
});