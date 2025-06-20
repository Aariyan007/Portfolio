const express = require('express');
const cors = require('cors');
const router = express.Router();
const {registerUser} = require('../controllers/user_controller')

router.use(
    cors({
        credentials : true,
        origin:"http://localhost:5173"
    })
)

router.post('/user',registerUser);

module.exports = router;