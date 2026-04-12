require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');

const contactRoute = require('./routes/contact');
const downloadRoute = require('./routes/download');

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_contacts';

const limiter = rateLimit({ windowMs: 1000 * 60 * 5, max: 100, message: 'Too many requests, please try again later.' });

app.use(cors());
app.use(express.json());
app.use(limiter);

app.use('/api/contact', contactRoute);
app.use('/api/download', downloadRoute);

app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('Connected to MongoDB');
    startServer();
  })
  .catch(err => {
    console.warn('MongoDB connection failed (app continues in degraded mode):', err.message || err);
    startServer();
  });
