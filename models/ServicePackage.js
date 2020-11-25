const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServicePackageSchema = new Schema(
  {
    titlePrice: {
      type: String,
      required: true
    },

    serviceList: {
      type: String,
      required: true
    },

    date: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = ServicePackage = mongoose.model("services", ServicePackageSchema);
