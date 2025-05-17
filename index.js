require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.headers['x-forwarded-for'] || req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipaddress.split(',')[0].trim(),
    language: language,
    software: software
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
