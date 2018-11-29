module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        display_name: DataTypes.STRING,
        display_order: DataTypes.INTEGER,
        image_url: DataTypes.STRING,
        level: {type: DataTypes.INTEGER},
        parent_id: {type: DataTypes.INTEGER},
        community: DataTypes.STRING,
    }, {
        tableName: 'categories',
        createdAt   : 'created_at',
        updatedAt   : 'updated_at',
        timestamps  : true,
        underscored : true
    });
    return Category;
};
