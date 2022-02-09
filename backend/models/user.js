const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");
const normalize = require("./plugins/normalizeMongoose.js");

const userSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
module.exports.normalizedSchema = mongoose.model("User", userSchema.plugin(normalize));
