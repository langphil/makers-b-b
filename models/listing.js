'use strict';


module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    text: DataTypes.TEXT,
    img: DataTypes.STRING
  });

  Listing.associate = function (models) {
    Listing.belongsTo( models.User );
  };

  return Listing;
};
