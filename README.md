```markdown
# Real-Time Comments System

## Overview
This project is a real-time comments system that allows users to log in, post comments, and see new comments appear in real-time. It utilizes **Next.js** for the front-end, **Socket.IO** for real-time communication, and **MySQL** for data storage.

## Features
- **User Authentication**:
  - Users can log in using unique usernames.
  
- **Real-Time Commenting**:
  - Comments are broadcasted to all connected users in real-time using Socket.IO.

- **Comments Display**:
  - Comments are displayed with timestamps, ensuring clarity and chronological order.

- **Responsive UI**:
  - The user interface is built using Material UI, ensuring a smooth experience on both desktop and mobile devices.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/real-time-comments-system.git
   cd real-time-comments-system
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   cd frontend
   npm install
   # or
   yarn install
   ```

   Then for the backend:
   ```bash
   cd ../backend
   npm install
   # or
   yarn install
   ```

3. **Set up the database**:
   - Create a MySQL database named `comments_db` (or your preferred name).
   - Run the SQL scripts located in the `sql` directory to create the necessary tables.

4. **Create a `.env` file for the backend**:
   Copy the example `.env.example` file and set your own environment variables.
   ```bash
   cp .env.example .env
   ```

   **.env example**:
   ```bash
   PORT=5000
   MYSQL_HOST=localhost
   MYSQL_USER=your_mysql_user
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_DATABASE=comments_db
   ```

5. **Run the server**:
   - Start the backend server:
   ```bash
   npm start
   # or
   yarn start
   ```

   - Start the front-end application:
   ```bash
   cd ../frontend
   npm run dev
   # or
   yarn dev
   ```

   The front-end will now be running on `http://localhost:3000`, and the backend API will be available at `http://localhost:5000`.

---

## API Endpoints

### 1. **Post a Comment**
   Post a new comment to the system.

   **Endpoint**: `POST /api/comments`

   **Request Body**:
   ```json
   {
     "username": "User Name",
     "comment": "This is a comment."
   }
   ```

   **Response**:
   ```json
   {
     "success": true,
     "message": "Comment posted successfully."
   }
   ```

### 2. **Fetch Comments**
   Retrieve all comments from the system.

   **Endpoint**: `GET /api/comments`

   **Response**:
   ```json
   [
     {
       "id": 1,
       "username": "User Name",
       "comment": "This is a comment.",
       "timestamp": "2024-10-29T12:34:56Z"
     },
     ...
   ]
   ```

---

## Database
This project uses **MySQL** for storing comments. Ensure that your MySQL connection details are provided in the `.env` file.

---

## Technologies Used
- **Frontend**: Next.js, React.js, Material UI
- **Backend**: Node.js, Express.js, Socket.IO, MySQL

---

## Future Enhancements
- User registration and authentication improvements.
- Enhanced commenting features (e.g., editing and deleting comments).
- Integration with a more complex database structure for advanced features.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author
Alok Maurya - Full Stack Developer
```
