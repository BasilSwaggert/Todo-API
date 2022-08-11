# Todo-API
Todo list API technical challenge

To run the application, start the nodemon server with command "npm run dev". This command uses scripts I've written in on lines 6-8 in the "package.json".
The server will begin running on port: 5000

You will need to use a MongoDB database with admin credentials to run the program and have persistent entries.
You will want to use POSTMAN to utilize this application.

When using Postman we will be looking at the "Body" and you will need to make a few configurations. Make sure the response is selected as "Raw" and "JSON".
From there under "Pre-Req" you will want to add the script below, otherwise the timestamps will be hard to read:

const moment = require('moment');
pm.globals.set("timestamp", moment().toISOString());

Your base path will be: "http://localhost:5000/api/task", you can append "id"s from the tasks in the database when getting.
