const router = require("express").Router();
const { Profile } = require("../../models");
const withAuth = require('../../utils/auth');

router.post("/", /*withAuth,*/ async (req, res) => {
    try {
        const newProfile = await Profile.create(req.body);
        res.status(200).json(newProfile);
        console.log(newProfile);
    } catch (err) {        
        console.log(err);
        res.status(400).json(err);
    }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Tech }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
