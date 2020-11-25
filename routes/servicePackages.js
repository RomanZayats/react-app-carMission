const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  addService,
  getServices
} = require("../controllers/servicePackages");

// @route   POST /catalog
// @desc    Create new category
// @access  Private
router.post(
  "/",
  addService
);

// @route   GET /catalog
// @desc    GET existing categories
// @access  Public
router.get("/", getServices);

module.exports = router;