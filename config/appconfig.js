require('dotenv').config();

// config.js
module.exports = {
	app: {
		port: process.env.DEV_APP_PORT || 3000,
		appName: process.env.APP_NAME || 'nodeJS-postgresql-with-swagger',
		env: process.env.NODE_ENV || 'development',
	},
	db: {
		port: process.env.DB_PORT || 5432,
		database: process.env.DB_NAME || 'irad-node',
		password: process.env.DB_PASS || '12345',
		username: process.env.DB_USER || 'postgres',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'postgres',
		logging: true,
	},
	winiston: {
		logpath: '/nodeJS-postgresql-with-swagger/logs/',
	},
	auth: {
		jwt_secret: process.env.JWT_SECRET || 'jsblend@123',
		jwt_expiresin: process.env.JWT_EXPIRES_IN || '1d',
		saltRounds: process.env.SALT_ROUND || 10,
		refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
		refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || '2d', // 2 days
	},


};
