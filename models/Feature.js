const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeatureSchema = new Schema({
  featureImg: {
    type: String,
    required: true,
  },
  featureText: {
    type: String,
    required: true,
  },
  main: { type: Boolean },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Feature = mongoose.model("features", FeatureSchema);
