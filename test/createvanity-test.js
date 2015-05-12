var assert = require("assert");
var should = require("should");
var app = require("../lib/create");


describe('Creating a new myUrl', function () {

    it('should require an initial URL', function (done) {

        app.getMyUrl(null, function (error, result) {
            should.exist(error);
            done();

        })
    });
    it('should return a myUrl', function (done) {

        app.getMyUrl("http://rickgaribay.net", function (error, result) {
            should.exist(result);
            done();



        })
    });

    it('should not return an error', function (done) {

        app.getMyUrl("http://rickgaribay.net", function (error, result) {
            assert.equal(null, error);
            should.not.exist(error);
            done();
        })
    });

});

