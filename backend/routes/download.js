const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/cv/:format', (req, res) => {
  const { format } = req.params;
  const safeFormat = format.toLowerCase();
  const allowed = { pdf: 'Ishika_Jain_Resume.pdf', docx: 'Ishika_Jain_Resume.docx' };

  if (!allowed[safeFormat]) {
    return res.status(400).json({ error: 'Invalid format. Use pdf or docx.' });
  }

  const filePath = path.resolve(__dirname, '..', 'uploads', allowed[safeFormat]);
  return res.sendFile(filePath, err => {
    if (err) {
      console.error('Download sendFile error:', err);
      res.status(404).json({ error: 'File not found.' });
    }
  });
});

module.exports = router;
