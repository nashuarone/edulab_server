const { Schema, model, ObjectId } = require("mongoose");

const News = new Schema({
  title: { type: String, required: true },
  newsImg: { type: String },
  description: { type: String },
  creator: { type: ObjectId, ref: "Learner" },
});

module.exports = model("News", News);
