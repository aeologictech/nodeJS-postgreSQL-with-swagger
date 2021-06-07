

module.exports = (sequelize, DataTypes) => {
	const Permissions = sequelize.define('permissions', {
		permissionName: DataTypes.STRING,
	}, {});
	Permissions.associate = function (models) {
		// associations can be defined here
	};
	return Permissions;
};
