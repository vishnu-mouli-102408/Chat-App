# Chat App

## Overview

This project is a basic chat application that allows users to join different chat rooms and communicate in real-time. The application is built using the following technologies:

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **EJS**: Templating engine for server-side rendering.
- **Socket.io**: Library for enabling real-time, bidirectional communication.

## Technology Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Templating Engine**: EJS
- **WebSockets**: Socket.io

## Dependencies

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Express**: `npm install express`
- **MongoDB**: [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)
- **EJS**: `npm install ejs`
- **Socket.io**: `npm install socket.io`

## Features

- Real-time communication using Socket.io.
- Multiple chat rooms for users to join.
- Server-side rendering of dynamic content using EJS.

## How to Use

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishnu-mouli-102408/Chat-App.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the project root.
    - Set the following variables in the `.env` file:
        ```env
        MONGODB_URI=your_mongodb_connection_string
        ```

4. **Run the application:**
    ```bash
    npm start
    ```

5. **Access the application:**
    - Once the application is running, visit `http://localhost:3000` (or the specified port) in your web browser.

6. **Join a chat room:**
    - Choose or create a chat room and start chatting in real-time with other users.

7. **Explore the Chat App!**

## Configuration

Ensure to set the following environment variable in your `.env` file:

- `MONGODB_URI`: MongoDB connection string.

## License

This project is licensed under the [MIT License](LICENSE).

