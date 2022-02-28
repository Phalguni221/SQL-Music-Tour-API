'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        primaryKey: true,
        autoIncrement: true
    },
    start_time: {
        type: DataTypes.DATE,
        primaryKey: true,
        autoIncrement: true 
    },
    end_time: {
        type: DataTypes.DATE,
        primaryKey: true,
        autoIncrement: true 
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName:'events'
  });
  return Event;
};