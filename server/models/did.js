'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Did extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Did.init({
    userId: DataTypes.INTEGER,
    bootcampType: DataTypes.INTEGER,
    fundamentalNumber: DataTypes.INTEGER,
    eduStarDate: DataTypes.DATEONLY,
    eduCompleteDate: DataTypes.DATEONLY,
    did: DataTypes.INTEGER,
    status: DataTypes.STRING,
    createdDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Did',
  });
  return Did;
};