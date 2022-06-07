const router = require("express").Router();
const { Tech } = require("../../models");


router.get('/', async (req, res) => {
    try {
        const techData = await Tech.findAll();
        res.status(200).json(techData);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

module.exports = router;