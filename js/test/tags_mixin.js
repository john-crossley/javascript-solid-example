describe("TagsMixin", function() {

    var Class;

    beforeEach( function() {
        Class = function() {};
        Class.mixin.apply(Class, [ Tags ]);
    });

    it("has tags", function() {
        expect(new Class().listTags()).toEqual([]);
    });

    it("adds a tag", function() {
        var object = new Class();
        object.addTag("johncrossley");
        expect(object.listTags()).toEqual(["johncrossley"]);
    })

    it("removes a tag", function() {
        var object = new Class();
        object.addTag("johncrossley");
        object.removeTag("johncrossley");
        expect(object.listTags()).toEqual([]);
    });

});