const sequelize = require('../config/connection');
const {
    Profile,
    User,
    Tech,
    UserTech
} = require('../models');

const techSeedData = require('./techSeedData.json');
const userSeedData = require('./userData.json');
const profileSeedData = require('./profileData.json');
const userTechSeedData = require('./userTechData.json');



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
/*
    const bward = await User.create({
        username: 'bdubz',
        password: 'password',
        email: 'bward3@conncoll.edu'
    });
    const tech = await Tech.create({
        name: "HavaScripto",
        description: "Only known to me",
        image_link: "https://res.cloudinary.com/norher/image/upload/v1654360528/102114_Gaurang_JavaScript-and-the.large_xccmhl.jpg",
        use: "Programming Language"
    });

    await bward.addTech(tech), {
        through: {
            proficiency: 5
        }
    };

    const res = await User.findAll({
        include: {
            model: Tech,
            through: 'user_tech'
        }
    });

    console.log(res);
*/

}

seedDatabase();