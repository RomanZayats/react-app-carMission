const Invite = require("../models/Invite");
const { uuid } = require("uuidv4");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");
const mailSender = require("../commonHelpers/mailSender");
const subject = "Приглашение на регистрацию на сайте Car Mission";

exports.addInvite = async (req, res, next) => {
  const { email } = req.body;
  const uuid = uuid();
  const hostUrl = req.protocol + "://" + req.get("host");
  const newInvite = new Invite({ uuid, email });
  const newMail = await mailSender(
    email,
    subject,
    `<p style="font-size: 20px">Ваша ссылка на регистрацию на сайте:<br>${hostUrl}/users/registration/invite?uuid=${uuid}&email=${email}</p>`
  );

  newInvite
    .save()
    .then((data) => res.json({ data, newMail }))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.getInvite = (req, res, next) => {
  Invite.find()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};
