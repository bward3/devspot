const router = require('express').Router();
const signature = require('../../config/signuploadwidget');
const cloudinary = require('cloudinary').v2;

const cloudName = cloudinary.config().cloud_name;
const apiKey = cloudinary.config().api_key;

router.get('/', (req, res) => {
    const sig = signature.signUploadWidget();
    res.json({
        signature: sig.signature,
        timestamp: sig.timestamp,
        cloudName: cloudName,
        apiKey: apiKey
    });
});

module.exports = router;