const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_proj"
})


app.post("/add_user", (req, res) => {
    const sql =
      "INSERT INTO user_details (`username`,`email`,`password`,`fullname`) VALUES (?, ?, ?, ?)";
    const values = [req.body.username, req.body.email, req.body.password, req.body.fullname];
    db.query(sql, values, (err, result) => {
      if (err)
        return res.json({ message: "Something unexpected has occured" + err });
      return res.json({ success: "Student added successfully" });
    });
  });

 

  app.get("/users", (req, res) => {
    const sql = "SELECT * FROM user_details";
    db.query(sql, (err, result) => {
      if (err) res.json({ message: "Server error" });
      return res.json(result);
    });
  });


app.get("/get_user/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM user_details WHERE `id`= ?";
    db.query(sql, [id], (err, result) => {
      if (err) res.json({ message: "Server error" });
      return res.json(result);
    });
  });
  
  app.post("/edit_user/:id", (req, res) => {
    const id = req.params.id;
    const sql =
      "UPDATE user_details SET `username`=?, `email`=?, `fulname`=?, `password`=? WHERE id=?";
    const values = [
      req.body.username,
      req.body.email,
      req.body.fulname,
      req.body.password,
      id,
    ];
    db.query(sql, values, (err, result) => {
      if (err)
        return res.json({ message: "Something unexpected has occured" + err });
      return res.json({ success: "Student updated successfully" });
    });
  });
  
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM user_details WHERE id=?";
    const values = [id];
    db.query(sql, values, (err, result) => {
      if (err)
        return res.json({ message: "Something unexpected has occured" + err });
      return res.json({ success: "Student updated successfully" });
    });
  });
  
  app.listen(port, () => {
    console.log(`listening on port ${port} `);
  });
  