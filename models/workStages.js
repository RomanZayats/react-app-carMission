const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkStagesSchema = new Schema({
  sectionHead: {
    type: String,
    required: true,
  },

  stages: [
    {
      stageNum: { type: Number, required: true },
      stageText: { type: String, required: true },
    },
  ],

  textFirstLine: {
    type: String,
    required: true,
  },
  textSecondLine: {
    type: String,
    required: true,
  },
});

module.exports = WorkStage = mongoose.model("work stage", WorkStagesSchema);
