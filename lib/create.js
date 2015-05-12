
/**
 * Created by Rick.Garibay on 11/9/13.
 */
var myUrlPrefix = "http://myUrl.it/"
var model = require("../model/model");

exports.getMyUrl = function (url, callback) {

    if (url == null) {
        console.log("No URL received...")
        callback(new Error("URL is required."));
    }
    else {

        //console.log(url + " received....")

        var myUrlSuffix = genMyUrlSuffix();

        var myUrl = {url: url, myUrl: myUrlSuffix};

        //console.log("myUrl " + myUrl.myUrl);

        model.create(myUrl, function (error, result) {

            if(error == null){
            callback(null, myUrlPrefix + result.myUrl);
            }
            else{
                callback(error,null);
            }

        });

    }

    function genMyUrlSuffix() {
        var characterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // len = 24 + 24 + 10 = 58
        var characters = characterStr.split('');
        var uuid = "";
        for (var i = 0; i < 6; i++) {
            var rand = Math.round(Math.random() * 58);
            uuid = uuid + characters[rand];
        }

        return uuid;
    }


}