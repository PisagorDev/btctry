
  const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get('/stats', (req, res) => {
    // Burada verileri yanıt olarak gönderebilirsiniz
    const html = `<h2>trying</h2><p>Intelligence: 60</p>`
    res.setHeader('Content-Type', 'application/json');
    res.json({html : html});
  });

module.exports = router;
