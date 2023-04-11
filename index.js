const express = require("express");
const app = express();
const product = require("./api/product");
const stats = require("./api/stats")

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', 86400);
    next();
  });

app.use(express.json({ extended: false }));

app.use("/api/product", product);
app.use("/api/stats", stats);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
