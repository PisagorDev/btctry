
  const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get('/stats', (req, res) => {
    // Burada verileri yanıt olarak gönderebilirsiniz
    const html = `<h2>trying</h2><p>Intelligence: 55</p>`
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(stats));
  });

module.exports = router;
