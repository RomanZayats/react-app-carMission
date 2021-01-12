const GlobalConfig = require("../models/GlobalConfig");
const AWS = require("aws-sdk");

module.exports = async (customId) => {
  const configs = await GlobalConfig.findOne({
    customId: customId,
  });
  return configs;
};
