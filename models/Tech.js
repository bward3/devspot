const { Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');

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
        imageLink: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        use: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequalize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Tech'
    }
);

module.exports = Tech;