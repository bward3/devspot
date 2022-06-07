const router = require("express").Router();
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
  }
);

module.exports = router;