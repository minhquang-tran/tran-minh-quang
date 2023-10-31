# ExpressJS CRUD Server with MongoDB

This repository contains a simple ExpressJS server with CRUD (Create, Read, Update, Delete) operations for a "Resource" model, using MongoDB as the database.

## Table of Contents

- [ExpressJS CRUD Server with MongoDB](#expressjs-crud-server-with-mongodb)
  - [Table of Contents](#table-of-contents)
  - [Technology Stack](#technology-stack)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
  - [Testing the API](#testing-the-api)
  - [Possible Improvements](#possible-improvements)

## Technology Stack

This project uses the following technologies and tools:

- **Node.js**: [Official Website](https://nodejs.org/)
- **Express.js**: [Official Website](https://expressjs.com/)
- **TypeScript**: [Official Website](https://www.typescriptlang.org/)
- **MongoDB**: [Official Website](https://www.mongodb.com/)
- **Mongoose**: [Official Website](https://mongoosejs.com/)
- **Postman**: [Official Website](https://www.postman.com/) (for testing API endpoints)

## Prerequisites

Before you can run this application, make sure you have the following installed on your system:

* **Node.js**: Download and install Node.js: https://nodejs.org/
* **MongoDB**: Download and install MongoDB: https://www.mongodb.com/try/download/community

## Setup

1. Clone this repository to your local machine:

```bash
git clone https://github.com/minhquang-tran/tran-minh-quang.git
cd tran-minh-quang/problem-5
```

2. Install project dependencies:

```bash
npm install
```

3. Start the MongoDB server on your local machine, or ensure it's already running. The application is set to use the following configurations:

* Database Name: `99tech`
* Collection Name: `resources`

If you want to change these names, you can do so by updating the DB_URI in the src/database.ts file and the collection name in the app.ts file.

## Running the Application

To run the ExpressJS server, use the following commands:

```bash
npx tsc      # Compile TypeScript code to JavaScript
node dist/app.js   # Start the Express server
```

The server will start and listen on http://localhost:3000.

## API Endpoints

Here are the available CRUD endpoints:

| Endpoint | Method | Description |
|---|---|---|
| `/resources` | POST | Create a new resource |
| `/resources` | GET | List all resources |
| `/resources/:id` | GET | Get the details of a specific resource |
| `/resources/:id` | PUT | Update a specific resource |
| `/resources/:id` | DELETE | Delete a specific resource |

Remember to replace `:id` with the actual resource ID when making requests to the specific resource endpoint.

## Testing the API

You can use a tool like Postman to test the API. To create a new resource, send a POST request to the `/resources` endpoint with the following JSON body:

```json
{
  "name": "Sample Resource",
  "description": "This is a sample resource."
}
```

To get a list of all resources, send a GET request to the `/resources` endpoint.
To get the details of a specific resource, send a GET request to the `/resources/:id` endpoint, where `:id` is the ID of the resource.
To update a specific resource, send a PUT request to the `/resources/:id` endpoint with the updated JSON body.
To delete a specific resource, send a DELETE request to the `/resources/:id` endpoint, where `:id` is the ID of the resource.

## Possible Improvements

While this project serves its purpose as a smaller-scale application, there are several areas where it can be enhanced for production-readiness and scalability. Here are some potential improvements:

1. **Enhanced Authentication**:
   - Implement user registration and login functionality with JWT and secure password hashing.
   - Use user roles and permissions for better access control.

2. **Data Validation**:
   - Implement more comprehensive data validation, including input sanitization.
   - Use a schema validation library like `Joi` to define data validation rules.

3. **Error Handling**:
   - Implement custom error handling for specific error types (e.g., 404 Not Found, 401 Unauthorized).
   - Set up centralized logging and error tracking using tools like Sentry or ELK stack.

4. **Scalability and High Availability**:
   - Set up load balancing with Nginx or use a cloud-based load balancer for even distribution of traffic.
   - Explore database sharding to horizontally partition data.
   - Consider using Redis or other caching mechanisms for improved performance.
   - Containerize the application using Docker for easier deployment and scaling.
   - Break down the application into microservices for better maintainability and scalability.
   - Implement auto-scaling and monitoring for dynamic resource allocation.
   - Explore serverless computing for certain components of the application.

5. **Security Enhancements**:
   - Add security headers and configure them to protect against common web vulnerabilities.
   - Perform security audits, code reviews, and vulnerability assessments.

6. **Testing and Test Automation**:
   - Implement unit tests, integration tests, and end-to-end tests.
   - Set up continuous integration/continuous deployment (CI/CD) pipelines for automated testing and deployment.

7. **Environmental Configuration**:
   - Use environment variables for configuration management, allowing for easy deployment across different environments.

