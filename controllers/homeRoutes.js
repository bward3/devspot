const router = require('express').Router();

router.get("/", function(req, res) {
    res.render("homepage");
})

router.get("/login", function(req, res) {
    res.render("login");
})

router.get("/profile", function(req, res) {
    res.render("profile", {
        // Example
        userName: "Bob Smith",
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
    res.render("edit");
})

module.exports = router;
