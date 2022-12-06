require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.json({
    message: "👋🏾",
  });
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
