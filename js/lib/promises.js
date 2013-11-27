function getJSON(url) {
    var promise = new RSVP.Promise( function(respond, failure) {
        $.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                respond(data);
            },
            error: function(xhr, status, error) {
                // debugger;
                failure([xhr, status, error]);
            }
        });
    });
    return promise;
}