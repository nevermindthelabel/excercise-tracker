require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.port || 3001;
const mongoose = require('mongoose');
const mongoURI = process.env.mongoURI;
const exerciseRoutes = require('./routes/exercises');
const usersRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/exercises', exerciseRoutes);
app.use('/users', usersRoutes);

app.listen(PORT, console.log(`backend server running on port http://localhost:${PORT}`));
