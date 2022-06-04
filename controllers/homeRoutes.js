const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("homepage");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/profile", function(req, res) {
    res.render("profile", {
        // Example User
        userName: "Bob Smith",
        location: "Denver, Colorado",
        gitHub: "coolkidBob",
        linkedIn: "BobSmith55",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae suscipit voluptates, facere placeat praesentium laboriosam. Itaque commodi, consequatur necessitatibus facere nemo quis aperiam, vitae incidunt maxime id numquam optio!",
        expertise: {
            html: 1,
            css: 1,
            ruby: 3,
            nodeJs: 5,
            apple: 1,
            bash: 5,

        }
    });
})

router.get("/edit", function(req, res) {
    res.render("edit", {
    });
})

module.exports = router;
