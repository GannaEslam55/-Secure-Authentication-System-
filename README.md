# Secure Authentication System
## Assignment #2 — Data Integrity and Authentication

### Project Structure
```
secure_auth/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── authController.js  # Register, Login, Verify2FA logic
├── middleware/
│   ├── authMiddleware.js   # JWT token verification
│   └── authorizeRoles.js  # Role-based access control
├── models/
│   └── User.js            # User schema (name, email, password, role, 2FA)
├── routes/
│   ├── authRoutes.js      # /api/auth/register, /login, /verify-2fa
│   ├── adminRoutes.js     # /api/admin/admin (admin only)
│   ├── managerRoutes.js   # /api/manager/manager (manager + admin)
│   └── userRoutes.js      # /api/user/dashboard, /profile
├── frontend/
│   ├── css/style.css      # Shared styles
│   ├── js/auth.js         # Token management utilities
│   ├── register.html      # Register + QR Code page
│   ├── login.html         # Login + 2FA verification
│   ├── dashboard.html     # Main dashboard
│   ├── profile.html       # User profile
│   ├── admin.html         # Admin panel
│   ├── manager.html       # Manager panel
│   ├── user.html          # User area
│   └── denied.html        # Access denied page
├── .env                   # Environment variables
├── .gitignore
└── server.js              # Express app entry point
```

### How to Run
1. Make sure MongoDB is running locally
2. `npm install`
3. `node server.js`
4. Open `frontend/register.html` in your browser

### API Endpoints
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /api/auth/register | Register user | None |
| POST | /api/auth/login | Login with password | None |
| POST | /api/auth/verify-2fa | Verify 2FA code → get token | None |
| GET | /api/user/dashboard | Dashboard | Any role |
| GET | /api/user/profile | Profile | Any role |
| GET | /api/admin/admin | Admin panel | Admin only |
| GET | /api/manager/manager | Manager panel | Manager + Admin |
