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

//Ok!
// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO hotspring_table (hotSpringName, hotSpringReviews) VALUES('zyouzan','awesome');";
//   db.query(sqlInsert, (err, result) => {
//     res.send("hello");
//     console.log(err);
//   });
// });

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM hotspring_table";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const hotSpringName = req.body.hotSpringName;
  const hotSpringReviews = req.body.hotSpringReviews;
  const sqlInsert =
    "INSERT INTO hotspring_table (hotSpringName, hotSpringReviews) VALUES (?,?)";
  db.query(sqlInsert, [hotSpringName, hotSpringReviews], (err, result) => {
    console.log(err);
  });
});

app.delete("/api/delete/:hotSpringName", (req, res) => {
  const name = req.params.hotSpringName;
  const sqlDelete = "DELETE FROM hotspring_table WHERE hotSpringName = ?";
  db.query(sqlDelete, name, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/api/update", (req, res) => {
  const name = req.body.hotSpringName;
  const review = req.body.hotSpringReviews;
  const sqlUpdate =
    "UPDATE hotspring_table SET hotSpringReviews= ? WHERE hotSpringName = ?";
  db.query(sqlUpdate, [review, name], (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

//cors の設定のところかな
