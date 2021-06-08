 # Node Js Project Structure With Swagger API Documentation
 
In this repository, I am just analysis several project done earlier and finalize a nodejs project structure as per the basic requirement of any project.Now here you have some idea that how to start building the project to take this project as the starting point.
 
 some of the good practices followed in this repository:
 - Async/Await support 
 - WinstonJs Logger Implementation
 - Error Handling
 - Sequelize Support 
 - Basic Joi Validation
 - Open Api Specification implemented through swagger-jsdocs and swagger-ui
 - Jwt implementation 
 - Enviroment variables to hold configuration values .env file
 - OOP (object oriented programming) 
 
 # How to start the project 
 
Clone or download zip to your machine then hit this :

## Installation
*for newbies : Clone or download zip to your machine then hit this :

	npm install

## Configuration (database)
 
 Create a postgres database named demo with the following credintials 
 
 username : postgres 
 
 password : password
 
 run the migration using the following command :
 npx sequelize-cli db:migrate
 
 ## Run the project
 npm start
 
 ## API Documentation 
 http://localhost:3000/api/docs
  
