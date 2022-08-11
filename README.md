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

Your base path will be: "http://localhost:5000/api/task", you can append "id"s from the tasks in the database when using get, put, and delete.

When using POST, you will want to populate the below fields as such:

![Post_snapshot](https://user-images.githubusercontent.com/78224072/184255756-238bc30a-dff9-4b18-8840-a3072f5856b7.PNG)

You can then GET by appending the generated ID:

![Get_URI_Snapshot](https://user-images.githubusercontent.com/78224072/184256096-9c6e32b5-51ed-40b8-8172-23cbe1264ee9.PNG)

You can later update using PUT with the following fields, note that this is generating an Update time, if you use timeCreated again it will fail:

![Put_snapshot](https://user-images.githubusercontent.com/78224072/184256148-35c619cb-98b7-4f38-b765-28eb2e0fdaaf.PNG)

You can also DELETE task by their ID in the same way.

Finally, you can also GET all tasks in the database by not appending an ID.
