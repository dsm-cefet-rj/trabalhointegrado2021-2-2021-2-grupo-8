const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
