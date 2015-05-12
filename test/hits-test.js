var assert = require("assert");
var should = require("should");
var create = require("../lib/create");
var app = require("../lib/hits");
var model = require("../model/model")

describe('Requesting the hits for a myUrl', function () {

    it('should require an initial URL', function () {

        create.getMyUrl(null, function (error, result) {
            should.exist(error);
        })
    });

    it('should return the total hits', function (done) {

        // Make sure a myUrl exists
        model.submitMyUrl("jgFMLM",function(error,result){

        });

        app.getHits("jgFMLM", function (error, result) {
            should.exist(result);
            done();

        })
    });

    it('should not return an error', function (done) {

        app.getHits("jgFMLM", function (error, result) {
            assert.equal(null, error);
            should.not.exist(error);
            done();
        })
    });

});