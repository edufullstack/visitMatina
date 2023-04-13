const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('shop', {
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
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
  });
}