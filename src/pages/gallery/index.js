$.getJSON('./src/pages/gallery/images.json', function(photos) {
    $.each(photos, function() {
        $('<div class="photo"><div class="img" style="background-image:url('+this.thumbnail+');"></div><div class="guide"></div><div class="title">'+this.title+'</div></div>').appendTo('#gallery'); 
    });
});