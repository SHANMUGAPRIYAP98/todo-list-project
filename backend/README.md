# TODO LIST PROJECT

**1. Project Overview :**
    This project is built to track the user daily activities through a software instead of making notes manually in order to accomplish the daily tasks carried out. 
    The application is built using ***Node.js*** with ***Express*** framwork.
    The application allows the user to **create tasks, retrieve tasks, update existing tasks or delete tasks and also tracks the user session information.**

**2. Setup Instructions :**
   - Download Node.js using this [Node.js](https://nodejs.org/en/download/source-code/current) Link
   - Check the version once installed using `node -v`
   - Clone the project using the [Github Link](https://github.com/SHANMUGAPRIYAP98/todo-list-project) using `git clone https://github.com/SHANMUGAPRIYAP98/todo-list-project`
   - CD to project directory ex: cd backend
   - Install the node_modules using `npm install`
   - Run the project using `npm run start`

**3. Technologies Used :**

    1. Node.js - To run the server side application outside the browser
    2. Express Framework - To create REST APIs with Node.js
    3. Supabase - Used supabase for user authentication and authorization
    4. Mongoose - Library used to store data with the NoSQL database like MongoDB
    5. Typescript - Language used to build the backend application
    6. nodemon - Library used to run the application and restart the server upon any changes
    7. ts-node - To run the typescript code directly without compiling it to javascript.
    8. dotenv - To read the environmental variables
    9. body-parser - To convert the incoming request payload
    10. bcrypt - For encrypting the password and storing in the DB.
    11. cors -  To allow the application to access from a different origin.
    12. moment - For formatting date.
   
    Tools :
        1. VSCode IDE - To write the code and build the appliction
        2. Postman - To test the REST APIs
        3. Swagger - To document the APIs

**4.API Endpoints :**

    # Todo List API
API for managing todo lists

## Version: 1.0.0

### /register

#### POST
##### Summary:

User Registration

##### Request

| Fields| Mandatory |
| ----  | ----------|
| email    | yes |
| password | yes |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User Registered successfully! |
| 400 | email and password are required |
| 500 | User Registered Failed |

### /login

#### POST
##### Summary:

Login user

##### Request

| Fields| Mandatory |
| ----  | ----------|
| email    | yes |
| password | yes |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Login successful |
| 400 | Missing email or password |
| 500 | User login failed |

### /todos

#### GET
##### Summary:

Get all todos

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | List of todos |
| 401 | Unauthorized |
| 500 | Failed to fetch todos |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

#### POST
##### Summary:

Create a new todo

##### Request

| Fields| Mandatory |
| ----  | ----------|
|  task_name   | yes |
| due_date | yes |
| priority    | no |
| status | no |
|   created_at  | no |
| updated_at | no |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Todo created successfully |
| 400 | Invalid input |
| 500 | Failed to create todo |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

### /todos/{id}

#### GET
##### Summary:

Get a todo by ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Todo fetched successfully |
| 404 | Todo not found |
| 500 | Failed to fetch todo |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

#### PUT
##### Summary:

Update a todo by ID

##### Request

| Fields| Mandatory |
| ----  | ----------|
|  task_name   | no |
| due_date | no |
| priority    | no |
| status | no |

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Todo updated successfully |
| 404 | Todo not found |
| 500 | Failed to update todo |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

#### DELETE
##### Summary:

Delete a todo by ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Todo deleted successfully |
| 404 | Todo not found |
| 500 | Failed to delete todo |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

#### GET
##### Summary:

Get user session By ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User Session fetched successfully |
| 404 | Session not found |
| 500 | Failed to fetch Session By Id |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

#### POST
##### Summary:

Logout

##### Request

| Fields| Mandatory |
| ----  | ----------|
|  sessionId   | yes |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Logout successful |
| 404 | Session not found |
| 500 | Failed to Logout |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

**5. Database Schema :**

![alt text](<Blank document.png>)


**6. Future Improvements :**
  
  - Send email notifications as ***reminders*** for **high** priority task those are not completed.
  - We can provide reward points if all the tasks are ***completed***
  - Provide ***motivational quotes*** to push them to complete the work.
    