'use strict';
module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    text: DataTypes.TEXT,
    img: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Listing;
};