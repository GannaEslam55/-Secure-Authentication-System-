# 🔐 Secure Authentication System

A full-stack authentication system built with real-world security practices, including password hashing, Two-Factor Authentication (2FA), JWT-based authentication, and Role-Based Access Control (RBAC).

---

## 📌 Features

* ✅ User Registration & Login
* 🔐 Secure Password Hashing (bcrypt)
* 📱 Two-Factor Authentication (2FA) using Authenticator Apps
* 🪪 JWT-based Authentication
* 🛡️ Role-Based Access Control (Admin, Manager, User)
* 🚫 Protected Routes & Authorization Middleware
* 🗄️ Secure Database Storage
* 📊 Clean and Modular Project Structure

---

## 🧠 System Flow

1. User registers an account
2. Password is hashed and stored securely
3. 2FA secret key is generated
4. QR code is displayed for scanning
5. User logs in using email & password
6. User enters 2FA verification code
7. System validates both password and 2FA
8. JWT token is generated
9. User accesses protected routes using token
10. Access is granted/restricted based on role

---

## 🧱 Tech Stack

### Backend

* Node.js / Express.js
* JWT (jsonwebtoken)
* bcrypt
* speakeasy (for 2FA)
* qrcode

### Database

* MySQL / MongoDB

### Frontend

* HTML / CSS / JavaScript
  *(or React if used)*

---

## 🔐 Security Implementation

### Password Security

* Passwords are hashed using bcrypt
* No plain-text passwords stored

### Two-Factor Authentication (2FA)

* TOTP-based authentication
* Compatible with:

  * Google Authenticator
  * Microsoft Authenticator
  * Authy

### Token-Based Authentication

* JWT tokens used for session management
* Tokens required for accessing protected routes

### Role-Based Access Control (RBAC)

* Admin → Full access
* Manager → Limited management access
* User → Personal profile access

---

## 📂 Project Structure

```
/project-root
│── /controllers
│── /routes
│── /middlewares
│── /models
│── /config
│── /utils
│── /frontend
│── server.js
│── package.json
```

---

## 🔑 API Endpoints

### Auth

* POST /api/register
* POST /api/login
* POST /api/verify-2fa

### Protected Routes

* GET /api/profile
* GET /api/admin
* GET /api/manager
* GET /api/user

---

## 🛡️ Access Control Example

| Route    | Access Role  |
| -------- | ------------ |
| /admin   | Admin only   |
| /manager | Manager only |
| /profile | User only    |

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```
npm install
```

### 3. Run the server

```
npm start
```

---

## 🧪 Demo Requirements (Implemented)

* Register a new user
* Password hashing verification
* 2FA QR code generation
* Login with password + 2FA
* JWT token generation
* Protected route access
* Role-based authorization
* Unauthorized access handling

---

## 📈 Git Workflow

* Multiple meaningful commits
* Feature-based development
* Clean commit messages


