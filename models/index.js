const User = require('./User');
const Tech = require('./Tech');

User.hasMany(Tech, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Tech.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Project }; 