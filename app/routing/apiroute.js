var Profiles = require("../data/friends")
module.exports = function (app) {
    app.post("/api/friends", function (req, res) {

        var newProfile = req.body;

        console.log(newProfile);


        Profiles.push(newProfile);

        res.json(newProfile);
    });
    app.get("/api/friends", function (req, res) {
        res.json(Profiles);
    });
}