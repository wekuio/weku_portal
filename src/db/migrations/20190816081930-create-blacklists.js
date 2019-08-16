module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('blacklists', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            account_name: {
                type: Sequelize.STRING
            },
            bad_level: {
                type: Sequelize.INTEGER,
            },            
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('blacklists');
    }
};
