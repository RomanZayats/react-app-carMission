const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const { addWorkStages, getWorkStages } = require("../controllers/WorkStages");

// @route   POST /catalog
// @desc    Create new category
// @access  Private
router.post("/", addWorkStages);

// @route   GET /catalog
// @desc    GET existing categories
// @access  Public
router.get("/", getWorkStages);

module.exports = router;
