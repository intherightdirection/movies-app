const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static('./public'));

app.use(require('./routes/mainRoute'));

app.listen(PORT, () => console.log(`Your server is at localhost:${PORT}`));