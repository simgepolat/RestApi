require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const app = express();

const middleware = function (req,res,next){
  console.log("Yeni bir istek geldi.");
  next();
}
const middlewarepost = function (req,res,next){
  console.log("Post isteği için istek gönderildi");
  next();
}

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT + "/hello");
});

app.use(middleware);

app.get("/hello", function (req, res) {
  res.json("Merhaba, 'GET' istegi attiniz");
});

app.post("/hello", middlewarepost, function (req, res) {
  res.json("Merhaba, 'POST' istegi attiniz");
});

app.put("/hello", function (req, res) {
  res.json("Merhaba, 'PUT' isteği attiniz");
});

app.delete("/hello", function (req, res) {
  res.json("Merhaba, 'DELETE' istegi attiniz");
});


