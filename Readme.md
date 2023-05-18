# Node.js API Service

This is a sample Node.js service that provides two API endpoints to retrieve comments and posts from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com).

## API Endpoints

### Get Comments

Retrieve comments from the API.

- **URL:** `/api/comments`
- **Method:** GET
- **Query Parameters:**
  - `limit` (optional): Limit the number of items returned in the response.
- **Example:** `GET /api/comments?limit=9`

### Get Posts

Retrieve posts from the API.

- **URL:** `/api/posts`
- **Method:** GET
- **Query Parameters:**
  - `limit` (optional): Limit the number of items returned in the response.
- **Example:** `GET /api/posts?limit=9`

## How to Run

Follow these steps to run the Node.js service:

1. Make sure you have Node.js installed on your machine.
2. Clone or download this repository.
3. Open a terminal and navigate to the project directory.
4. Install the dependencies by running the following command:

   ```bash
   npm install

Start the server by running the following command:

  ```bash
npm run start
The server will start running on http://localhost:5000.

Use an API client (e.g., cURL, Postman) to send requests to the API endpoints mentioned above.

