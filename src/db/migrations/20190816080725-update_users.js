'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {      
      queryInterface.addColumn('users', 'referral', {type: 'VARCHAR(255)', allowNull: true, defaultValue: null});
  },

  down: function (queryInterface, Sequelize) {      
      queryInterface.removeColumn('users', 'referral');
  }
};