module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            display_name: {
                type: Sequelize.STRING
            },
            display_order: {
                type: Sequelize.INTEGER
            },
            image_url: {
                type: Sequelize.STRING
            },
            level: {
                type: Sequelize.INTEGER
            },
            parent_id: {
                type: Sequelize.INTEGER
            },
            community: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('categories');
    }
};
