const Feedback = require("../models/Feedback");
const mailSender = require("../commonHelpers/mailSender");

exports.createFeedback = (req, res, next) => {

  mailSender("av_zayats@ukr.net", "testing mail sender",
    "<div> <p>req.body.name</p> <p>req.body.phone</p></div>" );

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
  Feedback.deleteMany({})
    .then(data => res.send(data))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
 };


