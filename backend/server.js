require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require('fs');

const app = express();

const login_route = require("./user/insert_user")
const User = require ("./user/user_schema")

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());



// Connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("ERROR:", error);
        process.exit(1);
    }
};



// Home Route
app.get("/", (req, res) => {
    res.send("Backend server home page");
});



// Create User
app.use(login_route)



// Start Server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});