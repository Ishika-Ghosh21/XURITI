 Full-Stack Development Assessment

Objective
The objective of this project is to develop a CRUD (Create, Read, Update, Delete) web application using **React** for the frontend and **Express** with **MongoDB** for the backend. The application will feature user authentication using JWT (JSON Web Token), along with user registration and a user list page.

 Features

 Frontend (React with Material-UI)
- **Login Component**
  - A reusable and visually appealing login form created with Material-UI.
  - JWT authentication to handle login credentials and token storage.

- **Registration Page**
  - A user registration form with fields for username, password, and password confirmation.
  - Form validation to ensure passwords match before submission.

- **User List Page**
  - A page displaying a list of all registered users.
  - User data is fetched from the backend and presented in a user-friendly format.

 Backend (Express with MongoDB)
- **Express Server**
  - Endpoints for user registration (`POST /register`), login (`POST /login`), and fetching users (`GET /users`).
  - JWT authentication to protect routes as needed.

- **MongoDB Integration**
  - Storage of user data in MongoDB.
  - Securely hashed and stored passwords.

- **JWT Authentication**
  - Token generation and validation for secure access to protected routes.

 Installation

    Prerequisites
    - Node.js
    - MongoDB

# Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
