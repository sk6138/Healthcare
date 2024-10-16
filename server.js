// Change from import to require
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const servicesRoute = require('./routes/services'); // Import services route


const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/services', servicesRoute);

// MongoDB Connection
const MONGO_URI = 'mongodb://mongo:GvIhJfRxvziPIFiUsFgQJbzyoBLtLKmo@junction.proxy.rlwy.net:28307';
const PORT=5000;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Start Server
const port = PORT ;
app.listen(port, () => console.log(`Server running on port ${port}`));
