var firstRoute = require("./dataUser.json");
var secondRoute = require("./dataTeams.json");
var thirdRoute = require("./dataMembers.json");
var fourthRoute = require("./dataTasks.json");
var fifthRoute = require("./dataEvents.json");

module.exports = () => ({
    users: firstRoute,
    teams: secondRoute,
    members: thirdRoute,
    tasks: fourthRoute,
    events: fifthRoute,
});
