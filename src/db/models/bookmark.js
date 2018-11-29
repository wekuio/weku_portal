module.exports = function (sequelize, DataTypes) {
    var Bookmark = sequelize.define('Bookmark', {
        account_name: DataTypes.STRING,
        post_url: {type: DataTypes.STRING},
        community: DataTypes.STRING,
        post_data: DataTypes.STRING
    }, {
        tableName: 'bookmarks',
        createdAt   : 'created_at',
        updatedAt   : 'updated_at',
        timestamps  : true,
        underscored : true
    });
    return Bookmark;
};
