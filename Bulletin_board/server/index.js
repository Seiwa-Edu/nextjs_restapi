const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Hokuto1442Canada*",
  database: "HotDataBase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// app.post("/api/insert", (req, res) => {
//   const hotSpringName = req.body.hotSpringName;
//   const hotspringReview = req.body.hotspringReview;

//   const sqlInsert =
//     "INSERT INTO hotspring_table (hotSpringName, hotspringReview) VALUES (?,?)";
//   db.query(sqlInsert, [hotSpringName, hotspringReview], (err, result) => {
//     console.log(result);
//   });
// });

// app.post("/api/insert", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO hotspring_table (hotSpringName, hotspringReview) VALUES('武川の湯','最高');";
//   db.query(sqlInsert, (err, result) => {
//     res.send("hello");
//     console.log(err);
//   });
// });

//Ok!
// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO hotspring_table (hotSpringName, hotSpringReviews) VALUES('zyouzan','awesome');";
//   db.query(sqlInsert, (err, result) => {
//     res.send("hello");
//     console.log(err);
//   });
// });

app.post("/api/insert", (req, res) => {
  const hotSpringName = req.body.hotSpringName;
  const hotspringReviews = req.body.hotspringReviews;
  const sqlInsert =
    "INSERT INTO hotspring_table (hotSpringName, hotSpringReviews) VALUES (?, ?);";
  db.query(sqlInsert, (err, result) => {
    res.send("hello");
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

//cors の設定のところかな
