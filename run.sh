#!/bin/bash

# Install Node
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Initialize a new project
npm init -y

# Install Express
npm install express

# Install SQLite
npm install sqlite3

# Start the application
node app.js