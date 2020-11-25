const ServicePackage = require("../models/ServicePackage");

exports.addService = (req, res, next) => {

  const newService = new Service(req.body);

  newService
    .save()
    .then(data => res.json(data))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}"`
      })
    );
};

exports.getServices = (req, res, next) => {
  ServicePaсkage.find()
    .then(data => res.send(data))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};