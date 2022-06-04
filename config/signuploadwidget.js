const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true
});

const apiSecret = cloudinary.config().api_secret;

const signUploadWidget = () => {
    const timestamp = Math.round((new Date).getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request({
        timestamp: timestamp,
        source: 'uw',
        folder: 'devspot'
    }, apiSecret);

    return {
        timestamp,
        signature
    }
}

module.exports = {
    signUploadWidget,
    myconfig
};