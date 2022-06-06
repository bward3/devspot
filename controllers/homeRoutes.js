const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  // if logged in find all users if not find all users where the username = ?
  try {
    const allUserData = await User.findAll();
    // const selectUsers = await User.findAll({
    //   where: {
    //     $or: [{ username: "cfoye" }, { username: "bward" }],
    //   },
    // });

    const users = allUserData.map((user) => user.get({ plain: true }));
    //const team = selectUsers.map((user) => user.get({ plain: true }));

    res.render("homepage", {
      users,
      //   team,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", function (req, res) {
  res.render("profile");
  // {
  // Example User
  //   userName: "Bob Smith",
  //   location: "Denver, Colorado",
  //   gitHub: "coolkidBob",
  //   linkedIn: "BobSmith55",
  //   bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae suscipit voluptates, facere placeat praesentium laboriosam. Itaque commodi, consequatur necessitatibus facere nemo quis aperiam, vitae incidunt maxime id numquam optio!",
  //   expertise: {
  //     html: 1,
  //     css: 1,
  //     ruby: 3,
  //     nodeJs: 5,
  //     apple: 1,
  //     bash: 5,
  //   },
  // });
});

router.get("/edit", function (req, res) {
  res.render("edit", {});
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
