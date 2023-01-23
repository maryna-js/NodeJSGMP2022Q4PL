var csv = require("csvtojson");
var fs = require('fs');

csv()
    .fromFile("./csv/nodejs-hw1-ex1.csv")
    .then(function(jsonArrayObj){
        fs.writeFile("output.txt", JSON.stringify(jsonArrayObj), function(err) {
            if (err) {
                console.log(err);
            }
        });
    })


