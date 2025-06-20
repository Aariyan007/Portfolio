const User = require('../model/schema');

const test = (req, res) => {
    res.json("Test Working");
};

const registerUser = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name) {
            return res.json({ error: 'Name is required' });
        }

        if (!message) {
            return res.json({ error: 'Type something cool in message' });
        }

        if (!email || !email.includes('@')) {
            return res.json({ error: 'Valid email is required' });
        }

        const check = await User.findOne({ email });

        if (check) {
            return res.json({ message: "Daym! Welcome again" });
        }

        const user = await User.create({ name, email, message });

        return res.json({
            message: "User registered successfully!",
            user,
        });

    } catch (err) {
        console.error("Something went wrong, try again:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    test,
    registerUser,
};
