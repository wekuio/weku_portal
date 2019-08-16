'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {      
      queryInterface.addColumn('accounts', 'referrer_paid', {type: 'TINYINT(1)', allowNull: true, defaultValue: 0});
      queryInterface.addColumn('accounts', 'delegation_revoked', {type: 'TINYINT(1)', allowNull: true, defaultValue: 0});
      queryInterface.addColumn('accounts', 'is_disabled', {type: 'TINYINT(1)', allowNull: true, defaultValue: 0});
  },

  down: function (queryInterface, Sequelize) {      
      queryInterface.removeColumn('accounts', 'referrer_paid');
      queryInterface.removeColumn('accounts', 'delegation_revoked');
      queryInterface.removeColumn('accounts', 'is_disabled');
  }
};