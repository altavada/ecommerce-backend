# E-Commerce Back-End Development Demo
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Description
This project utilizes Node.js with Express, Inquirer, and Sequelize to demonstrate the functionality of SQL databases and server-side Javascript code to produce the functional backend for an ecommerce website. This is not a deployed project (there is no front end), but the functioning routes and database can be tested locally with Insomnia and the MySQL shell. Refer to usage instructions for further details. [Click here](https://drive.google.com/file/d/1vKhcqEAna1Af_0uleq6mi2os9e8P2h28/view) to watch a demo video of the program in action.
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Questions](#questions)
# Installation
Because this is a non-deployed project, you will need to copy the entire project folder to your local system. Once this is done, navigate to that folder on your system, open the command line, and enter 'npm install' to install necessary node modules. Then, set up a .env file with the following keys: DB_NAME, DB_USER, and DB_PASSWORD. DB_NAME should equal 'ecommerce_db,' DB_USER should equal 'root,' and DB_PASSWORD should equal your MySQL password. Next, open the MySQL shell in your command line with 'mysql -u root -p' and your MySQL password when prompted. Once in the shell, type 'SOURCE db/schema.sql;' to generate the database, then 'QUIT' to exit. Next, enter 'node seeds/index.js' to seed the database. Lastly, enter 'npm start' to begin the program. Refer to demo video for a demonstration of the installation process. If you encounter trouble connecting to the database, check the connection.js file in the 'config' folder. You may need to change 'host' on line 8 to 'localhost' depending on your operating system.
# Usage
Once you have installed and started the program, you can test out the API routes with Insomnia. Your HTTP request in Insomnia will be 'localhost:3001/api/' followed by your desired endpoint. For basic GET and POST requests, these endpoints are '/categories', '/products', and '/tags'. For PUT and DELETE requests, you will need to follow one of those three endpoints with '/:id' where 'id' is the ID number of the desired DB item. This also applies to GET requests targeting a single item, rather than all items in the specified table. Sample JSON input for products, categories, and tags can be found in the testdata.txt file, which will make your life much easier while exploring these routes. NOTE: categories cannot be removed unless products listed under it are reassigned or deleted. Products must have a valid category_id value at all times. Likewise, new products cannot be created if their tag ID's or category ID's don't correspond to an existing value.
# License
The MIT License
# Contributors
N/A
# Questions
GitHub username: altavada -- Email address: sam.tomaka@gmail.com