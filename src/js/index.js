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
                 $('<a page="'+this+'" href="#">'+title+'</a>').appendTo('nav');
             } else {
                 $('<a page="'+this+'" href="#'+this+'">'+title+'</a>').appendTo('nav');
             }
             first = false;
        });
        onhashchange();
        $('#hamburger').click(function() {
            $('header nav').toggleClass('visible');
        });
        $('header nav a').click(function() {
            $('header nav').removeClass('visible');
        });
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
    $('pages > page link[rel=stylesheet]').attr('disabled', true);
    $('nav > a').removeClass('selected');
    $('nav > a[page='+hash+']').addClass('selected');
    if(mem.cachedPages.indexOf(hash) !== -1) {
        $('page[hash='+hash+']').addClass('visible').find('link[rel=stylesheet]').attr('disabled', false);
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