const router = require("express").Router();
const {
  User,
  Tech
} = require("../../models");
const withAuth = require('../../utils/auth');

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });
    console.log('userdata', userData);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/', withAuth, async (req, res) => {
  try {
    console.log('TRYING TO ADD image_link TO: ');
    console.log(req.session.user_id);
    const userData = await User.update({
      ...req.body
    }, {
      where: {
        id: req.session.user_id
      }
    });
    if (!userData) {
      res.status(404).json({
        message: 'No post found with that id!'
      });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({
          message: "Incorrect username"
        });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({
          message: "Incorrect password, please try again"
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({
        user: userData,
        message: "You are now logged in!"
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/tech", async (req, res) => {
  try {
    console.log(req.body.techs.length);
    if (!req.body.techs.length == 0) {
      const user = await User.findByPk(req.session.user_id);
      req.body.techs.forEach( async (techData) => {
        const tech = await Tech.findByPk(techData.id);
        user.addTech(tech, {
          through: {
            proficiency: techData.proficiency
          }
        });
      });
      res.status(200).json({ message: "added techs!" })
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id/tech", async (req, res) => {
  try {
    const techData = await User.findByPk(req.params.id,
      {
        include: {
          model: Tech
        }
      });
    res.status(200).json(techData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;