const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./src/model/schema.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is live!');
});

// Log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`, req.body);
    next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Handle /contact form POST
app.post('/contact', (req, res) => {
    console.log('=== CONTACT ENDPOINT HIT ===');
    console.log('Request body:', req.body);
    
    UserModel.create(req.body)
        .then(data => {
            console.log('Data saved successfully:', data);
            res.json({ success: true, data });
        })
        .catch(err => {
            console.log('Error saving data:', err);
            res.status(500).json({ success: false, error: err.message });
        });
});

// Use Render's dynamic port
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
