module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
		firstName: {
			type: DataTypes.STRING
		},
		lastName: {
			type: DataTypes.STRING
		}
		}, {
			freezeTableName: true // Model tableName will be the same as the model name
	});
  	return user;
}