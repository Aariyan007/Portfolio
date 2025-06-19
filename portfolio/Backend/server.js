const express = require('express');
const app = express();
const { test } = require('./controllers/user_controller')
PORT = 3000;
const mongoose = require('mongoose');

app.use(express.json());

app.get('/', test);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected");
})
    .catch((err)=> {

    console.error("Error : ", err);
})




app.use('/', require('./routes/user_routes'));

app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})