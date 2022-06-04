const User = require('./User');
const Tech = require('./Tech');
const Profile = require('./Profile');

User.hasOne(Profile, {
    foreignKey: 'profileId',
    onDelete: "CASCADE"
});

Profile.belongsTo(User, {
    foreignKey: 'username',
    onDelete: "CASCADE"
})

User.hasMany(Tech, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Tech.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Project, Profile }; 