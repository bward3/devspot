const sequelize = require('../config/connection');
const { Profile, User, Tech } = require('../models');

const techSeedData = require('./techSeedData.json');
const userSeedData = require('./userData.json');
const profileSeedData = require('./profileData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const technologies = await Tech.bulkCreate(techSeedData);
    const user = await User.bulkCreate(userSeedData, {
        individualHooks: true,
    });

    const profile = await Profile.bulkCreate(profileSeedData);

}

seedDatabase();