const sequelize = require('../config/connection');
const {
    Profile,
    User,
    Tech
} = require('../models');

const techSeedData = require('./techSeedData.json');
const userSeedData = require('./userData.json');
const profileSeedData = require('./profileData.json');



const seedDatabase = async () => {
    await sequelize.sync({
        force: true
    });

    const technologies = await Tech.bulkCreate(techSeedData);
    const user = await User.bulkCreate(userSeedData, {
        individualHooks: true,
    });

    const profile = await Profile.bulkCreate(profileSeedData);

    //EXPERIMENTING WITH SOME M:N STUFF

    // const bward = await User.create({
    //     username: 'bdubz',
    //     password: 'password',
    //     email: 'bward3@conncoll.edu'
    // });
    // const tech = await Tech.create({
    //     name: "HavaScripto",
    //     description: "Only known to me",
    //     image_link: "https://res.cloudinary.com/norher/image/upload/v1654360528/102114_Gaurang_JavaScript-and-the.large_xccmhl.jpg",
    //     use: "Programming Language"
    // });
    // const tech2 = await Tech.create({
    //     name: "HavaScripto",
    //     description: "Only known to me",
    //     image_link: "https://res.cloudinary.com/norher/image/upload/v1654360528/102114_Gaurang_JavaScript-and-the.large_xccmhl.jpg",
    //     use: "Programming Language"
    // });
    // const tech3 = await Tech.create({
    //     name: "HavaScripto",
    //     description: "Only known to me",
    //     image_link: "https://res.cloudinary.com/norher/image/upload/v1654360528/102114_Gaurang_JavaScript-and-the.large_xccmhl.jpg",
    //     use: "Programming Language"
    // });

    // await bward.addTeches([tech, tech2, tech3], {
    //     through: {
    //         proficiency: 1
    //     },
    //     through: {
    //         proficiency: 5
    //     },
    //     through: {
    //         proficiency: 7
    //     }
    // }]);

    // const res = await User.findAll({
    //     include: {
    //         model: Tech,
    //         through: 'user_tech'
    //     }
    // });

    // console.log(res);


}

seedDatabase();