Healthcare Service API


This project is a simple RESTful API built using Node.js, Express, and MongoDB. It allows users to manage a list of healthcare services by providing the ability to create, read, update, and delete services. Each service includes fields such as serviceId, name, description, and price.

-----------------------------------------------------------------------------------------------------------

API Endpoints

*****************************************************************
POST /services: Create a new service

Body:
json
{
  "name": "General Checkup",
  "description": "A general medical checkup service",
  "price": 50
}
********************************************************************
GET /services: Get a list of all services
*********************************************************************
GET /services/:id: Get details of a specific service by serviceId
*********************************************************************
PUT /services/:id: Update a service by serviceId

Body:
json
{
  "name": "Updated Service",
  "description": "Updated description",
  "price": 100
}
*************************************************************************
DELETE /services/:id: Delete a service by serviceId


-----------------------------------------------------------------------------------------------------------

Installation Steps

***********************************************************************
1.Clone the repository:


git clone https://github.com/sk6138/healthcare-service-api.git
cd healthcare-service-api

*************************************************************************
2.Install dependencies:

Run the following command to install all required dependencies:


npm install

***************************************************************************
3.Run the server:

You can start the server in development mode using nodemon (auto-restarts on file changes):


npm run dev
Or run it in normal mode:

npm start
The server will be running on the  (default: http://localhost:5000).

-----------------------------------------------------------------------------------------------------------

Testing the API
You can test the API endpoints using Postman or any other API testing tool:

**********************************************************************
Create a new service:

Method: POST
URL: http://localhost:5000/services
Body (JSON):
json
{
  "name": "General Checkup",
  "description": "A general medical checkup service",
  "price": 50
}
************************************************************************
Get all services:

Method: GET
URL: http://localhost:5000/services
************************************************************************
Update a service:

Method: PUT
URL: http://localhost:5000/services/:id
Body (JSON):
json
{
  "name": "Updated Checkup",
  "description": "Updated description",
  "price": 75
}
*************************************************************************
Delete a service:

Method: DELETE
URL: http://localhost:5000/services/:id

-----------------------------------------------------------------------------------------------------------
Future Enhancements
Implement user authentication to secure the API.

