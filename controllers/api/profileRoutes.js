const router = require("express").Router();
const { Profile } = require("../../models");
const withAuth = require('../../utils/auth');
const connections = require('../../config/connection.js');


router.post("/profile", async (req, res) => {
  var profile = req.body;
  await Profile.create( {
    "name": profile.name,
    "location": profile.location,
    "bio": profile.bio,
    "linkedIn": profile.linkedIn,
    "gitHub": profile.gitHub,
  });
  // await User.create({
  //   firstName: "Nathan"
  // });
});

  // router.get("/profile", withAuth, async (req, res) => {

  // };


  module.exports = router;
