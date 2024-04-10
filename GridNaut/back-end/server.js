// server.js
import express from 'express';
import db from './db.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/noticias", (req, res) => {
  db.any("SELECT * FROM Noticias")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.status(500).json({ error: 'An error occurred while fetching news' });
    });
});

app.get("/noticias/:id", (req, res) => {
  const id = req.params.id;
  db.one("SELECT * FROM Noticias WHERE id = $1", id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.status(500).json({ error: 'An error occurred while fetching the news' });
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
