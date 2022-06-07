const router = require("express").Router();
const {
  User,
  Tech,
  Profile
} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  // if logged in find all users if not find all users where the username = ?
  try {
    const allUserData = await User.findAll();

    const users = allUserData.map((user) => user.get({
      plain: true
    }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ["password"]
      },
      include: [{
        model: Profile
      }]
    });

    const user = userData.get({
      plain: true
    });

    console.log(user);

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile/:id", async (req, res) => {
  try {
    const profileData = await Profile.findByPk(req.params.id);

    const profile = profileData.get({
      plain: true
    });

    res.render("profile", {
      ...profile,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/edit", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ["password"]
      },
      include: [{
        model: Tech
      },
      {
        model: Profile
      }
    ],
    });
    const techData = await Tech.findAll();
    const techs = techData.map((tech) => tech.get({
      plain: true
    }));


    const user = userData.get({
      plain: true
    });
console.log(user);
    res.render("edit", {
      ...user,
      techs,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;