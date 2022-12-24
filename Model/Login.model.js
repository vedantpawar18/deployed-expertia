const mongoose = require("mongoose");

const LoginModel = mongoose.model("Auth",mongoose.Schema({
    userName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true },
  })
);

module.exports = LoginModel