/**
 * Created by Rick.Garibay on 11/9/13.
 */
var model = require("../model/model");

var myUrlPrefix = "http://myUrl.it"

exports.redirect = function (myUrl, callback) {

    if (myUrl == null) {
        console.log("No myUrl received...")
        callback(new Error("MyUrl suffix is required."), null);
        return;
    }

    // Get the original URL from the db

    model.submitMyUrl(myUrl, function (error, result) {

        callback(null, result)

    })

}

