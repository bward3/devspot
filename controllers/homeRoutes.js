const router = require("express").Router();
const {
  User,
  Tech,
  Profile,
  UserTech
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
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: {
        exclude: ["password"]
      },
      include: [{
          model: Profile,
        },
        {
          model: Tech,
          through: UserTech
        }
      ]
    });

    const user = userData.get({
      plain: true
    });

    const fe_techs = [];
    const be_techs = [];
    const other_techs = [];

    user.Teches.forEach(tech => {
      switch (tech.use) {
        case 'FrontEnd':
          fe_techs.push(tech);
          break;
        case 'BackEnd':
          be_techs.push(tech);
        default :
          other_techs.push(tech);
      }
    });

    res.render("profile", {
      ...user,
      fe_techs,
      be_techs,
      other_techs,
      logged_in: true,
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
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
      }],
    });
    const techData = await Tech.findAll();
    const techs = techData.map((tech) => tech.get({
      plain: true
    }));


    const user = userData.get({
      plain: true
    });

    res.render("edit", {
      ...user,
      techs,
      logged_in: true,
      user_id: req.session.user_id
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect(`/profile/${req.session.user_id}`);
    return;
  }

  res.render("login");
});

module.exports = router;