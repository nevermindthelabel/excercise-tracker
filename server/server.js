const express = require('express');
const cors = require('cors');
const PORT = process.env.port || 3001;

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ success: true })
})

app.listen(PORT, console.log(`backend server running on port http://localhost:${PORT}`));
