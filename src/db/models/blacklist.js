module.exports = function (sequelize, DataTypes) {
    var Blacklist = sequelize.define('Blacklist', {
        account_name: DataTypes.STRING,
        bad_level: {type: DataTypes.INTEGER}
    }, {
        tableName: 'blacklists',
        createdAt   : 'created_at',
        updatedAt   : 'updated_at',
        timestamps  : true,
        underscored : true
    });
    return Blacklist;
};
