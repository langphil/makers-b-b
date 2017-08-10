'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.addColumn(
      'Listings',
      'User_id',
      {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
   });
  }

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
