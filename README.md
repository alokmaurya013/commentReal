# Real-Time Comments System

## Overview
This project is a real-time comments system that allows users to log in, post comments, and see new comments appear in real-time. It utilizes **Next.js** for the front-end, **Socket.IO** for real-time communication, and **MySQL** for data storage.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Running the App](#running-the-app)
- [Assumptions](#assumptions)
- [License](#license)

## Features
- User authentication with usernames.
- Real-time commenting functionality using Socket.IO.
- Display of comments with timestamps.
- Responsive UI built with Material UI.

## Project Structure

## Technologies Used
- **Frontend**: Next.js, React.js, Material UI
- **Backend**: Node.js, Express.js, Socket.IO, MySQL
- **Database**: MySQL

## Prerequisites
- **Node.js** (version 14 or higher)
- **MySQL** (version 5.7 or higher)
- **npm** or **yarn**

## Setup Instructions

### Frontend Setup
1. **Navigate to the front-end directory**:
   ```bash
   cd frontend
2.**Install dependencies**:
   ```bash
   npm install
   or
   yarn install
3.**Start the front-end application**:
   ```bash
   npm run dev
   or
   yarn dev
### Backend Setup
1. **Navigate to the back-end directory**
   ```bash
   cd backend
2.**Install dependencies**:
  ```bash
  npm install
  or
  yarn install
3.**Set up the database**:
   -Create a MySQL database named comments_db (or your preferred name).
   -Run the SQL scripts located in the sql directory to create the necessary tables.
4.**Start the back-end server**:
  ```bash
  npm start
  or
  yarn start

**Running the App**
-Access the front-end application at http://localhost:3000.
-The back-end API will be running on http://localhost:5000.
**Assumptions**
-The MySQL server is running and the database is correctly configured.
-Any necessary environment variables (like database connection strings) are set up.
**License**
-This project is licensed under the MIT License.
