# Zywa Assignment for Recruitment
This is a full-stack JavaScript application that uses React for the front-end and Express.js for the back-end. The application is designed to track card status.

## How to run the code locally?
1.  Get the source code on local the computer.
2. Install the dependencies in the root directory, client directory, and server directory:

```
npm install
cd client && npm install
cd ../server && npm install
```
3. Populate the mongoDB database using given .csv files. which is place under /data directory.
- To do so first move to server directory

```
node populateDB.js
```

4. Start the server and client.
- In the server directory:
```
node index.js
```
- In the client directory:
```
npm start

```

5. Now, goto http://localhost:4000/get_card_status to get the card status. But make sure that you have connected the mongoDB database using valid mongodb connection string.

## Project Structure
The project is divided into two main parts: the client and the server.

The client is a React application created with Create React App. It contains components for displaying and managing card statuses. The main components are located in client/src/components.

The server is an Express.js application that serves as the API for the client. It contains routes for managing card statuses, located in server/routes.

The data directory contains CSV files that are used to populate the database.




