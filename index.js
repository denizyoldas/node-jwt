const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
// import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')

dotenv.config();

// Connect to the database
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connect  to db!');
});

app.use(express.json());

// Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

// listen to port
app.listen(3000, () => {
    console.log('listening on port 3000');
});