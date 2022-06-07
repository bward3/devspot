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

module.exports = router;