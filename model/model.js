var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/myUrl');
var cx = process.env.MYURL_MONGOCX;
mongoose.connect(cx);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Connected to MongoDB");
});

var schema = mongoose.Schema({ url:String, myUrl:String, hits:Number });
var MyUrl = mongoose.model('myUrl', schema);

var repo = function () {
};

exports.create = function (myUrl, callback) {

    var currentMyUrl = new MyUrl({url:myUrl.url, myUrl:myUrl.myUrl, hits:0});

    //console.log("MyUrl value is: " + currentMyUrl.myUrl);

    currentMyUrl.save(function (err) {
        //console.log("error: " + err);
        callback(err, myUrl);
    });

};

exports.submitMyUrl = function (myUrl, callback) {


    MyUrl.findOneAndUpdate({myUrl:myUrl}, { $inc:{ hits:1 }}, {upsert:true}, function (error, theMyUrl) {

        console.log("Found myUrl with a myUrl value of " + theMyUrl.myUrl + " and a URL value of: " + theMyUrl.url);

        callback(error, theMyUrl);
    })
};

exports.getHits = function (myUrl, callback) {

    MyUrl.findOne({myUrl:myUrl},function (error, theMyUrl) {
        console.log(theMyUrl.hits + " found");
        callback(error,theMyUrl.hits);

    })
}

//exports.repo = repo;
