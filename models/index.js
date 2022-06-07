const User = require('./User');
const Tech = require('./Tech');
const Profile = require('./Profile');
const sequelize = require('../config/connection');
const {
    DataTypes
} = require('sequelize');


User.hasOne(Profile, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
})

const UserTech = sequelize.define('user_tech', {
    proficiency: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

User.belongsToMany(Tech, {
    through: UserTech,
    foreignKey: 'user_id',
    otherKey: 'tech_id'
});

Tech.belongsToMany(User, {
    through: UserTech,
    foreignKey: 'tech_id',
    otherKey: 'user_id'
});

module.exports = {
    User,
    Tech,
    Profile,
    UserTech
};