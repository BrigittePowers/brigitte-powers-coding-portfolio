const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		project_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		live_link: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		repo_link: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		skills: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},
		date: {
			type: DataTypes.TEXT,
		},
        image: {
            type: DataTypes.STRING
        }
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'dish',
	},
);

module.exports = Project;
