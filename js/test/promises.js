describe("Promises", function() {

    it("is resolved", function(done) {

        var output = "";

        getJSON("/examples/promised.json")
            .then( function(data) {
            output += "JSON got back!";
        }, function(errorData) {
            // Error
            expect(output).toBe("JSON got back!", "** Promise failed. **")
        }).then(function() {
            expect(output).toBe("JSON got back!");
            done();
        });
    });

});