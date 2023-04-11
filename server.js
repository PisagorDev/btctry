const express = require('express');
const app = express();

// CORS hatasını aşmak için middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', 86400);
  next();
});

// Burada API endpointlerinizi oluşturabilirsiniz
// Örneğin:
app.get('/stats', (req, res) => {
  // Burada verileri yanıt olarak gönderebilirsiniz
  const html = `<h2>arif</h2><p>Intelligence: selam</p>`
  const image = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  const stats = { name: "arif", intelligence: 24124, image: image, html: html};
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(stats));
});

app.get('/', (req,res) => {
    res.send("aa")
})
app.listen(3000, () => {
  console.log('Sunucu adresinde çalışıyor.');
});