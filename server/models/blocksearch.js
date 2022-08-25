'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlockSearch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BlockSearch.init({
    klay_last_block_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BlockSearch',
  });
  return BlockSearch;
};