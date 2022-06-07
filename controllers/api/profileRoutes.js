const router = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const {
    Profile
} = require("../../models");
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
    try {
        const newProfile = await Profile.create(req.body);
        res.status(200).json(newProfile);
        console.log(newProfile);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.put('/', withAuth, async (req, res) => {
    try {
        const profileData = await Profile.update({
            ...req.body
        }, {
            where: {
                id: req.session.user_id
            }
        });
        if (!profileData) {
            res.status(404).json({
                message: 'No post found with that id!'
            });
            return;
        }
        res.status(200).json(profileData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get("/profile", withAuth, async (req, res) => {
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

        const user = userData.get({
            plain: true
        });

        res.render("profile", {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;