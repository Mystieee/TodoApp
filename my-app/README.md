#Todo App
TO-DO list project to track progress for the buildings of a speculative Company called "Golden Real Estate".
The projects are activities to remember and collaborate on; like fixing some defects, cleaning the facade, renewing the fire extinguishers etc.

The front end is built using **React js** and integrates with a **Spring-boot** backend using REST APIs. Build tool used is Gradle.
Database used Postgresql.

A file named import.sql is used in the root of the classpath and is executed on startup. Hibernate creates the schema from scratch (that is, ddl-auto property is set to create-drop). 

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and and Spring Initializr(https://start.spring.io/).

##Installations
###Node.js
###JDK 8+
###Gradle

## Available Scripts

In the project directory, you can run:

###Backend:
Run the spring boot main class - TodoAppApplication.java or
Start the app from Spring Boot Dashboard 

######Backend server would be running on http://localhost:8080

###Frontend
Install the dependencies and start the server.
####`cd my-app`
####`npm install`
#### `npm start`

Runs the app in the development mode.<br />
######Open [http://localhost:3000](http://localhost:3000) to view the app in browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

homepage from: https://startbootstrap.com/templates/full-width-pics/