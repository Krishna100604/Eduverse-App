const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Eduverse is running perfect");
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
