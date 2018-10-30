var mem = {};
$.getJSON('./src/pages/pages.json', function(pages) {
    mem.pages = pages;
    $(document).ready(function() {
        var first = true;
        $.each(pages, function(title) {
             if(first) {
                 $('<a href="#">'+title+'</a>').appendTo('nav');
             } else {
                 $('<a href="#'+this+'">'+title+'</a>').appendTo('nav');
             }
             first = false;
        });
        onhashchange();
    });
});
onhashchange = function() {
    var hash = document.location.hash.substring(1);
    if(hash == '') {
        $.each(mem.pages, function() {
           hash = this;
           return false;
        });
    }
    $('#dynamiccss').attr('href', './src/pages/'+hash+'/index.css');
    $.get('./src/pages/'+hash+'/index.htm', function(html) {
        $('main').html(html);
        $.getScript('./src/pages/'+hash+'/index.js');
    });
};
$(document).ready(function() {
    
});