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
			type: DataType.STRING,
			allowNull: false,
            defaultValue: '[]'
			get() {
				return this.getDataValue('favColors').split(';');
			},
			set(val) {
				this.setDataValue('favColors', val.join(';'));
			},
		},
		description: {
			type: DataTypes.STRING,
		},
		date: {
			type: DataTypes.TEXT,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'dish',
	},
);

module.exports = Project;
