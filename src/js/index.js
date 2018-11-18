var mem = {
    pages: null,
    cachedPages: []
};
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
           hash = this.toString();
           return false;
        });
    }
    $('pages > page').removeClass('visible');
    if(mem.cachedPages.indexOf(hash) !== -1) {
        $('page[hash='+hash+']').addClass('visible');
    } else {
        $.get('./src/pages/'+hash+'/index.htm', function(html) {
            var thisPage = $('<page></page>').html(html).attr('hash', hash).appendTo('pages');
            $('<link id="dynamiccss" rel="stylesheet" type="text/css">').attr('href', './src/pages/'+hash+'/index.css').prependTo(thisPage);
            $.getScript('./src/pages/'+hash+'/index.js', function() {
                mem.cachedPages.push(hash);
                thisPage.addClass('visible');
            });
        });
    }
};
onscroll = function() {
    if(window.scrollY > 15) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
}
$(document).ready(function() {
    
});