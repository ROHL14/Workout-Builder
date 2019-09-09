const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  muscle: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = model("Exercise", exerciseSchema);
