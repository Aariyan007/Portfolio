const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load .env variables
dotenv.config();

// Import routes & controllers
const { test } = require('./controllers/user_controller');
const userRoutes = require('./routes/user_routes');

// Define PORT
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Test Route
app.get('/', test);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Register routes
app.use('/', userRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
