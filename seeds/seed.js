const sequelize = require('../config/connection');
const { Profile, User, Tech } = require('../models');

const techSeedData = require('./techSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const technologies = await Tech.bulkCreate(techSeedData);
}

seedDatabase();