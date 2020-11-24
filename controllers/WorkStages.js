const WorkStages = require("../models/workStages");

exports.addWorkStages = (req, res, next) => {
  const newWorkStages = new WorkStages(req.body);

  newWorkStages
    .save()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.getWorkStages = (req, res, next) => {
  WorkStages.find()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};
