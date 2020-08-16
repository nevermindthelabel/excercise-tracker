require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.port || 3001;
const mongoose = require('mongoose');
const mongoURI = process.env.mongoURI;

const app = express();

app.use(cors());
app.use(express.json());

console.log(mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
  res.json({ success: true })
})

app.listen(PORT, console.log(`backend server running on port http://localhost:${PORT}`));
