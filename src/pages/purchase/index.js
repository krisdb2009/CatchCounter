$.getJSON('./src/pages/purchase/pricing.json', function(items) {
    $.each(items, function() {
        var product = $('<div class="product"></div>').appendTo('#products');
        product.append('<div class="title">'+this.title+'</div>');
        product.append('<div class="price">'+this.price+'</div>');
        product.append('<div class="image" style="background-image:url(\''+this.image+'\');"></div>');
        var bullets = $('<div class="bullets"></div>').appendTo(product);
        $.each(this.bullets, function() {
            bullets.append('<div class="bullet">'+this+'</div>');
        });
        $.get(this.button, function(button) {
            product.append('<div class="button">'+button+'</div>');
        });
    });
});