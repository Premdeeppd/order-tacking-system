// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/cardRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// MongoDB connection
mongoose.connect('mongodb+srv://admin:Qpfg89inAPkkBvg7@cluster0.bfk4xik.mongodb.net/zywaDB');

// Routes
app.use(cors());
app.use(express.json());
app.use('/', cardRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
