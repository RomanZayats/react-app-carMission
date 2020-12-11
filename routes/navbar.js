const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
    addNavbarItem,
    getNavbarItem,
    getNavbarItems,
    deleteNavbarItem,
    updateNavbarItem
} = require("../controllers/navbar");

// @route   GET /navbar
// @desc    GET existing navbar items
// @access  Public
router.get("/", getNavbarItems);

// @route   GET /navbar
// @desc    GET existing  navbar item
// @access  Public
router.get("/:id", getNavbarItem);


// @route   POST /navbar
// @desc    Create new navbar item
// @access  Private
router.post(
    "/", 
    // passport.authenticate("jwt-admin", { session: false }),
    addNavbarItem
);

// @route   PUT /navbar/:id
// @desc    Update existing navbar item
// @access  Private
router.put(
    "/:id",
    // passport.authenticate("jwt-admin", { session: false }),
    updateNavbarItem
);

// @route   DELETE /navbar/:id
// @desc    DELETE existing navbar item
// @access  Private
router.delete(
    "/:id",
    // passport.authenticate("jwt-admin", { session: false }),
    deleteNavbarItem
);

module.exports = router;
