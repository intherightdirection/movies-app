import express, { static } from "express";

const app = express();
const PORT = 3000;

app.use(static('./public'));

app.use(require('./routes/mainRoute'));

app.listen(PORT, () => console.log(`Your server is at localhost:${PORT}`));