const express = require("express");
const router = express.Router();

const User = require ("./user_schema")


router.get("/userslogin" , (req , res) => {
    res.send("user login route")
})

router.post("/userslogin", async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const newUser = await User.create({
            email,
            password
        });

        res.status(201).json({
            message: "User created successfully",
            user: newUser
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;


