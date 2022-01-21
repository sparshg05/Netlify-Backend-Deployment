const express = require("express");
const serverless = require("serverless-http");
const data = require('../course.json');
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(cors());

router.get("/data", (req, res) => {
  // res.json({ hello: "hi!" });
  res.send(data);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
