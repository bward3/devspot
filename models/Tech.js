const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tech extends Model {}

Tech.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        use: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Tech'
    }
);

module.exports = Tech;