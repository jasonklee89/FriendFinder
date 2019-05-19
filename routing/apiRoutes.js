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
        var totalDifference = 0;
        // Looping through the friends array in friends.js
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;
            // Finding the friend with the least totalDifference in scores
            for(var j = 0; i < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // Updates the bestMatch whenever there is a lesser totalDifference
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
};