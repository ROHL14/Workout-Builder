const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
