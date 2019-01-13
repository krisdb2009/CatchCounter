$.getJSON('./src/pages/contact_us/contact.json', function(data) {
    $.each(data.info, function() {
        $('<div></div>').html(this).appendTo('#contact_info');
    });
    $('#contact iframe').attr('src', data.google_map_url);
});