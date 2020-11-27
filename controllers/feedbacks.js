const Feedback = require("../models/Feedback");

exports.addFeedback = (req, res, next) => {

  const newFeedback = new Feedback(req.body);

  newFeedback
    .save()
    .then(data => res.json(data))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );

};

exports.getFeedbacks = (req, res, next) => {
  Feedback.find()
    .then(data => res.send(data))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.deleteFeedbacks = (req, res, next) => {
  Feedback.delete()
    .then(data => res.send(data))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
 };


