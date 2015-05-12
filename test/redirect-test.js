var assert = require("assert");
var should = require("should");
var app = require("../lib/redirect");

var myUrlPrefix = "http://myUrl.it/"

describe("Submitting a myUrl", function () {
    it("should require a properly formatted URL", function () {
        app.redirect("jgFMLM", function (error, result) {
            should.not.exist(error);
        });


    });

    it("should return a redirect URL as originally provided", function () {
        app.redirect("jgFMLM", function (error, result) {
            var myUrl = result;
            should.exist(myUrl.url);
        });

    })

});