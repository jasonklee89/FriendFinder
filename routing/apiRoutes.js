var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        // console.log(userScores);
        
        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for(var j = 0; i < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = friends[i].friendDifference;
                }
            }
        }
        friends.push(userData);
        res.json(bestMatch);
    });
}



// var express = require("express");
// var path = require("path");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Basic route that sends the user first to the AJAX Page

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });
