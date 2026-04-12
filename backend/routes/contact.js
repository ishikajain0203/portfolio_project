const express = require('express');
const fs = require('fs/promises');
const mongoose = require('mongoose');
const path = require('path');
const Contact = require('../models/Contacts');

const router = express.Router();
const storageDir = path.join(__dirname, '..', 'storage');
const fallbackFile = path.join(storageDir, 'contact-messages.json');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ensureFallbackStore = async () => {
  await fs.mkdir(storageDir, { recursive: true });

  try {
    await fs.access(fallbackFile);
  } catch {
    await fs.writeFile(fallbackFile, '[]', 'utf8');
  }
};

const saveFallbackMessage = async (entry) => {
  await ensureFallbackStore();
  const raw = await fs.readFile(fallbackFile, 'utf8');
  const messages = JSON.parse(raw);
  messages.push(entry);
  await fs.writeFile(fallbackFile, JSON.stringify(messages, null, 2), 'utf8');
};

const normalizeBody = (body) => ({
  name: body.name?.trim(),
  email: body.email?.trim().toLowerCase(),
  message: body.message?.trim(),
});

router.post('/', async (req, res) => {
  const { name, email, message } = normalizeBody(req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  try {
    if (mongoose.connection.readyState !== 1) {
      await saveFallbackMessage({
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      });

      console.warn(`MongoDB unavailable. Stored contact message in fallback file: ${fallbackFile}`);
      return res.status(202).json({
        message: 'Message received. The database is currently unavailable, but your submission was accepted.',
      });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    return res.status(201).json({ message: 'Message received. Thank you!' });
  } catch (err) {
    console.error('Contact save error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
