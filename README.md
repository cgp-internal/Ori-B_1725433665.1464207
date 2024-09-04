City Management Application
=============================

This is a City Management Application, a RESTful API built with Node.js, Express, and SQLite.

How to Run
---------

1. Install Node.js if you haven't already.
2. Run the following command to install the required dependencies: `npm install`
3. Start the application by running the bash script: `./run.sh`
4. The application will be available at `http://localhost:3000`

Application Structure
-------------------

* `cities.csv`: Contains sample city data.
* `models`: Defines the data models, including the City model.
* `repositories`: Provides data access and manipulation functionality.
* `services`: Exposes business logic for managing city data.
* `controllers`: Handles HTTP requests and responses.
* `app.js`: The main entry point for the application, sets up the Express server and defines routes.
* `db.js`: Configures the SQLite database connection.

Note: This application uses a SQLite database, which is set up and configured in `db.js`.