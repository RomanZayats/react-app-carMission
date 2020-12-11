const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
    addLogo,
    getLogo,
    deleteLogo,
    updateLogoData
} = require("../controllers/logo");

// @route   GET /logo
// @desc    GET existing categories
// @access  Public
router.get("/", getLogo);

// @route   POST /logo
// @desc    Create new category
// @access  Private
router.post(
    "/", 
    // passport.authenticate("jwt-admin", { session: false }),
    addLogo
);

// @route   PUT /logo/:id
// @desc    Update existing logo
// @access  Private
router.put(
    "/:id",
    // passport.authenticate("jwt-admin", { session: false }),
    updateLogoData
);


// @route   DELETE /logo/:id
// @desc    DELETE existing logo
// @access  Private
router.delete(
    "/:id",
    // passport.authenticate("jwt-admin", { session: false }),
    deleteLogo
);

module.exports = router;
