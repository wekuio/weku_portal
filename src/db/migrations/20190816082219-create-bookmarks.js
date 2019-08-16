module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('bookmarks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            account_name: {
                type: Sequelize.STRING
            },
            post_url: {
                type: Sequelize.STRING
            },
            community: {
                type: Sequelize.STRING
            },  
            post_data: {
                type: Sequelize.TEXT
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
        return queryInterface.dropTable('bookmarks');
    }
};
